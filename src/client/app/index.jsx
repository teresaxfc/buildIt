import React from 'react';
import {render} from 'react-dom';
import Header from './Header.jsx';
import Introduction from './Introduction.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header user={user}/>
        <Introduction />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

