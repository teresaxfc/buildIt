import React, {Component} from 'react';

export default class Introduction extends React.Component {
  render() {
    return (
      <div>
        <h2>Faster builds. Smarter automation.</h2>
        <p>Automate your team’s software development processes, from testing through to delivery, no matter the
          language, environment or toolchain.</p>
        <a href="/auth/facebook" className="btn sign-up">Sign Up</a>
      </div>
    );
  }
}
