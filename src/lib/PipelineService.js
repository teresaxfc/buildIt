const PipelineRepository = require('./PipelineRepository');
const uuid = require('uuid-1345');
const Logger = require('./Logger');

class PipelineService {
  constructor() {
    this.logger = new Logger();
    this.pipelineRepository = new PipelineRepository();
  }

  getOrCreatePipeline(pipeline, userId) {
    return this.pipelineRepository.findOne({ pipeline, userId })
      .then(savedPipeline => savedPipeline || this.createNewPipeline(pipeline, userId));
  }

  createNewPipeline(pipeline, userId) {
    const id = uuid.v4();
    return this.pipelineRepository.save({ _id: id, pipeline:pipeline, userId: userId, createdTime: new Date() });
  }
}

module.exports = PipelineService;
