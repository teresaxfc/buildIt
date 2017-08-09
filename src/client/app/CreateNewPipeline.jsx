import React from 'react';
import CreatePipelineService from '../lib/CreatePipelineService.js';
import './CreateNewPipeline.sass';

export default class CreateNewPipeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      gitRepository: '',
      environmentVariables: '',
      createdPipelineName: '',
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.createNewPipeline = this.createNewPipeline.bind(this);

    this.createPipelineService = new CreatePipelineService(this.props.user);
  }

  updateInputValue(event) {
    if(event.target.id === 'pipeline-name') {
      this.setState({name: event.target.value});
    } else if(event.target.id === 'description') {
      this.setState({description: event.target.value});
    } else if(event.target.id === 'git-repository') {
      this.setState({gitRepository: event.target.value});
    } else {
      this.setState({environmentVariables: event.target.value});
    }
  }

  createNewPipeline() {
    const pipeline = {
      name: this.state.name,
      description: this.state.description,
      gitRepository: this.state.gitRepository,
      environmentVariables: this.state.environmentVariables
    };

    this.createPipelineService.createPipeline(pipeline)
      .then(pipeline => this.setState({createdPipelineName: pipeline.name}));
  }

  render() {
    return (
      <form className={`container display-pipeline ${this.props.onStatus}`}>
        <h2>Create New Pipeline</h2>

        <div className="form-group">
          <label htmlFor="pipeline-name">Name</label>
          <span className="required"> - Required</span>
          <input type="text" className="form-control" id="pipeline-name"
                 placeholder="Enter the name of the pipeline"
                 onChange={this.updateInputValue}
                 value={this.state.name}/>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description"
                 placeholder="Enter the description of the pipeline"
                 onChange={this.updateInputValue}
                 value={this.state.description}/>
        </div>

        <div className="form-group">
          <label htmlFor="git-repository">Git Repository</label>
          <span className="required"> - Required</span>
          <input type="text" className="form-control" id="git-repository"
                 placeholder="git@github.com:your/repo.git"
                 onChange={this.updateInputValue}
                 value={this.state.gitRepository}/>
        </div>

        <div className="form-group">
          <label htmlFor="environment-variables">Environment Variables</label>
          <textarea className="form-control" id="environment-variables" rows="4"
                    placeholder="Separate each variable with comma, in the format FOO=bar"
                    onChange={this.updateInputValue}
                    value={this.state.environmentVariables}>&nbsp</textarea>
        </div>

        <button type="button" className="btn btn-primary" onClick={this.createNewPipeline}>Create pipeline</button>
        {this.state.createdPipelineName}
      </form>
    );
  }
}