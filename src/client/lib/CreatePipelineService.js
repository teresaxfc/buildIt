import axios from 'axios';

export default class CreatePipelineService {
  constructor(user) {
    this.user = user;
  }

  createPipeline(pipeline) {
    return axios.post('/pipeline/create', {pipeline: pipeline, user:this.user})
      .then(response => {
        if (response === null) {
          return null;
        } else {
          return {
            name: response.data.name,
            description: response.data.description,
            gitRepository: response.data.gitRepository,
            environmentVariables: response.data.environmentVariables
          };
        }
      });
  };
}
