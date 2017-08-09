import React from 'react';
import {render} from 'react-dom';
import Header from './Header.jsx';
import Content from './Content.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header user={user}/>
        <Content user={user}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

