import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FeedItem from './feedItem';
import './App.css';

const someStuff = {
  thing: 1,
  stuff: 'this'
};

const Demo = ({ thing, stuff }) => {
  console.log(thing, stuff);
  return (
    <h1>Some stuff...</h1>
  )
};

export default class App extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div style={{padding: '100px'}}>
        <Demo {...someStuff}/>
        <FeedItem />
      </div>
    );
  }
}
