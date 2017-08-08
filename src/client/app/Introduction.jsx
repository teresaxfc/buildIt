import React from 'react';
import './Introduction.sass';

export default class Introduction extends React.Component {
  render() {
    return (
      <div className="introduction">
        <h2 className="introduction-header">Build It Now</h2>
        <p className="introduction-content">Continuous integration could be simpler.</p>
      </div>
    );
  }
}
