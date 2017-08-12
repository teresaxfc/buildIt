const chai = require('chai');
const PipelineService = require('../src/lib/PipelineService');

const expect = chai.expect;

describe('PipelineService test', () => {
  const pipelineService = new PipelineService();

  it('Should return null when the pipeline name is already taken', () => {
    const pipelineToSave = {
      name: 'test-pipeline',
      description: 'test-description',
      gitRepository: 'test-gitRepository',
      environmentVariables: 'test-environmentVariables'
    };
    const userId = 'test-userId';

    return pipelineService.createNewPipeline(pipelineToSave, userId)
      .then(savedPipeline => pipelineService.createPipeline(savedPipeline.pipeline.name, userId)
        .then(result => expect(result).equals(null)));
  });

  it('Should create a new pipeline when the pipeline name is non-existed', () => {
    const pipelineToSave = {
      name: `non-exiting-test-pipeline${new Date()}`,
      description: 'non-exiting-test-description',
      gitRepository: 'non-exiting-test-gitRepository',
      environmentVariables: 'non-exiting-test-environmentVariables'
    };
    const userId = 'test-userId';

    return pipelineService.createPipeline(pipelineToSave,userId)
      .then(result => expect(result.pipeline.description).equals('non-exiting-test-description'));
  });
});
