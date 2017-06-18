import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Comments from './Comments/Comments';
import FeedItem from './feedItem';
import './App.css';

const AVATAR = 'https://scontent.xx.fbcdn.net/v/t1.0-1/c207.3.545.545/s50x50/207807_582977028394450_1334487058_n.jpg?oh=8cf141048de314282cd059e6fda04ab0&oe=59DAD753';

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

const fakeComments = [
  {
    name: 'David Skrenta',
    image: AVATAR,
    comment: 'Some comment',
    timestamp: new Date()
  },
  {
    name: 'David Skrenta',
    image: AVATAR,
    comment: 'Some comment',
    timestamp: new Date()
  },
  {
    name: 'David Skrenta',
    image: AVATAR,
    comment: 'Some comment',
    timestamp: new Date()
  },
  {
    name: 'David Skrenta',
    image: AVATAR,
    comment: 'Some comment',
    timestamp: new Date()
  }
];

export default class App extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div style={{padding: '100px'}}>
        <Comments comments={fakeComments} />
      </div>
    );
  }
}
