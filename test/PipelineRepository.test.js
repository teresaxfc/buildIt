const chai = require('chai');
const uuid = require('uuid-1345');
const PipelineRepository = require('../src/lib/PipelineRepository');

const expect = chai.expect;

describe('PipelineRepository test', () => {
  const pipelineRepository = new PipelineRepository();

  it('Should return the same url when given a new url', () => {
    const pipeline = {name: `new-pipeline-${new Date().getTime()}`};
    const id = uuid.v4();
    const userId = 'userId';

    return pipelineRepository.save({ _id: id, pipeline, userId, createdTime: new Date() })
      .then(savedPipeline => pipelineRepository.findOne(savedPipeline))
      .then(fetchedPipeline => expect(fetchedPipeline.pipeline).deep.equals(pipeline));
  });
});
