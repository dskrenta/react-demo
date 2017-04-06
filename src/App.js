import React from 'react';
import './App.css';
import ReactCrop from 'react-image-crop';
import '../node_modules/react-image-crop/dist/ReactCrop.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Hello, World!</h2>
        <ReactCrop src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-YNEZDF5RGCpG5ytYp7ktwxYMHb3WMtoxNbFV8avGRuVH1nuyVw" />
      </div>
    );
  }
}
