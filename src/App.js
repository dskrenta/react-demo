import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FeedItem from './feedItem';
import './App.css';

export default class App extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div style={{padding: '100px'}}>
        <FeedItem />
      </div>
    );
  }
}
