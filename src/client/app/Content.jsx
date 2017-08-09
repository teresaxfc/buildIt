import React from 'react';
import Pipeline from './Pipeline.jsx';
import './Content.sass';

export default class Content extends React.Component {
  render() {
    const anonymousUserContent = () =>
      <div className="introduction">
        <h2 className="introduction-header">Build It Now</h2>
        <p className="introduction-content">Continuous integration could be simpler.</p>
      </div>;

    const loggedUserContent = () =>
      <Pipeline />;

    return (
      <div>
        {this.props.user === null ? anonymousUserContent() : loggedUserContent()}
      </div>

    );
  }
}
