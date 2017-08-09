import axios from 'axios';

export default class CreatePipelineService {
  constructor(user) {
    this.user = user;
  }

  createPipeline(pipeline) {
    return axios.post('/pipeline/create', {pipeline: pipeline})
      .then(response => {
        const createdPipeline = {
          name: response.data.name,
          description: response.data.description,
          gitRepository: response.data.gitRepository,
          environmentVariables: response.data.environmentVariables
        };

        if (this.user === null) {
          this.saveToLocalStorage(createdPipeline);
        }

        return createdPipeline;
      });
  };

  saveToLocalStorage(createdPipeline) {
    this.getPipelinesFromLocal()
      .then(savedPipelines => {
        const isSaved = savedPipelines.some(function isSaved(element) {
          return element.name === createdPipeline.name;
        });
        if (!isSaved) {
          localStorage.setItem(`anonymous-pipeline-${new Date()}`, JSON.stringify(createdPipeline));
        }
      });
  };

  getPipelinesFromLocal() {
    return new Promise(function (resolve, reject) {
      resolve(Object.keys(localStorage)
        .filter(key => key.startsWith('anonymous-pipeline'))
        .map(key => JSON.parse(localStorage.getItem(key))));
    });
  };
}
