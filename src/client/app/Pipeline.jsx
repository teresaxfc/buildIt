import React from 'react';
import CreateNewPipeline from './CreateNewPipeline.jsx';
import './Pipeline.sass';

export default class Pipeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayWithNoPipeline: 'true',
    };

    this.createNewPipeline = this.createNewPipeline.bind(this);
  }

  createNewPipeline() {
    this.setState({ displayWithNoPipeline: !this.state.displayWithNoPipeline });
  }

  render() {
    return (
      <div className="container">
        <div className="create-pipeline">
          <p className={ `display-pipeline ${this.state.displayWithNoPipeline} no-pipelines-notice` }>
            You have no pipelines right now</p>
          <button
            className={ `btn display-pipeline ${this.state.displayWithNoPipeline}` }
            onClick={ this.createNewPipeline }>Create New Pipeline
          </button>
        </div>
        <CreateNewPipeline onStatus={ !this.state.displayWithNoPipeline } user={ this.props.user }/>
      </div>
    );
  }
}
