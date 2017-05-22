import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import Slider from 'material-ui/Slider';
import Paper from 'material-ui/Paper';
import {Card, CardMedia} from 'material-ui/Card';

const gridTileStyle = {
  padding: 15
};

const MaterialApp = () => (
  <MuiThemeProvider>
    <GridDemo />
  </MuiThemeProvider>
);

const GridDemo = () => (
  <div>
    <GridList cols={6} style={{height: '80vh'}}>
      <GridTile cols={5} style={gridTileStyle}>
        <Card>
          <CardMedia style={{padding: 0}}>
            <img src="http://placehold.it/150x10" />
          </CardMedia>
        </Card>
      </GridTile>
      <GridTile cols={1} style={gridTileStyle}>
        <Slider />
        <Slider defaultValue={0.5} />
        <Slider defaultValue={1} />
      </GridTile>
    </GridList>
    <GridList cols={1} style={{height: '20vh'}}>
      <GridTile cols={1} style={gridTileStyle}>
        List of images
      </GridTile>
    </GridList>
  </div>
);

export default MaterialApp;
