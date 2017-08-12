import axios from 'axios';

export default class CreatePipelineService {
  constructor(user) {
    this.user = user;
  }

  createPipeline(pipeline) {
    return axios.post('/pipeline/create', {pipeline: pipeline, user:this.user})
      .then(response => {
        if (response.data.pipeline === undefined) {
          return null;
        } else {
          return {
            pipelineName: response.data.pipeline.pipelineName,
            description: response.data.pipeline.description,
            gitRepository: response.data.pipeline.gitRepository,
            environmentVariables: response.data.pipeline.environmentVariables
          };
        }
      });
  };
}
