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
  <GridList cols={6}>
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
    <GridTile cols={6} style={gridTileStyle}>
      List of images
    </GridTile>
  </GridList>
);

export default MaterialApp;
