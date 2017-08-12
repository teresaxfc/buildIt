const PipelineRepository = require('./PipelineRepository');
const uuid = require('uuid-1345');
const Logger = require('./Logger');

class PipelineService {
  constructor() {
    this.logger = new Logger();
    this.pipelineRepository = new PipelineRepository();
  }

  createPipeline(pipeline, userId) {
    const pipelineName = pipeline.pipelineName;
    return this.pipelineRepository.findOne(pipelineName, userId)
      .then((savedPipeline) => {
        if (savedPipeline !== null) {
          return null;
        }

        return this.createNewPipeline(pipeline, userId);
      });
  }

  createNewPipeline(pipeline, userId) {
    const id = uuid.v4();
    return this.pipelineRepository.save(
      { _id: id, pipelineName: pipeline.pipelineName, pipeline, userId, createdTime: new Date() });
  }
}

module.exports = PipelineService;
