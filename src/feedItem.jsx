import React from 'react';

import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { grey200, grey100, grey400 } from 'material-ui/styles/colors';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AVATAR = 'https://scontent.xx.fbcdn.net/v/t1.0-1/c207.3.545.545/s50x50/207807_582977028394450_1334487058_n.jpg?oh=8cf141048de314282cd059e6fda04ab0&oe=59DAD753';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu
    iconButtonElement={iconButtonElement}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
  >
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const EntityCard = () => (
  <Card>
    <CardHeader
      title="David Skrenta"
      subtitle="14 hours ago"
      avatar={AVATAR}
    />
  <CardText style={{paddingTop: '0px'}}>
      Some sample post!
    </CardText>
  </Card>
);

const CommentInput = () => (
  <div>
      <TextField fullWidth={true} hintText="Add comment..." />
      <RaisedButton fullWidth={true} label="Comment" />
  </div>
);

const Comments = () => (
  <List style={{paddingBottom: '0px'}}>
    <div style={{backgroundColor: grey100}}>
      <ListItem
        leftAvatar={<Avatar src={AVATAR} />}
        primaryText="David Skrenta"
        disabled={true}
        rightIconButton={rightIconMenu}
        secondaryText={
          <p>
            This is a really great post! Keep up the good work!
          </p>
        }
        secondaryTextLines={1}
      />
      <ListItem
        leftAvatar={<Avatar src={AVATAR} />}
        primaryText="David Skrenta"
        hoverColor={null}
        disabled={true}
        rightIconButton={rightIconMenu}
        secondaryText={
          <p>
            This is a really great post! Keep up the good work!
          </p>
        }
        secondaryTextLines={1}
      />
    </div>
    <div style={{backgroundColor: grey200}}>
      <ListItem
        primaryText={<CommentInput />}
        disabled={true}
      />
    </div>
  </List>
);

const FeedItem = () => (
  <Card>
    <CardHeader
      style={{
        paddingTop: '10px',
        paddingBottom: '0px'
      }}
      title="David Skrenta"
      subtitle="14 hours ago"
      avatar={AVATAR}
    />
    <CardText style={{paddingTop: '0px', paddingBottom: '0px'}}>
      <p>
        Some Text...
      </p>
      <EntityCard />
    </CardText>
    <CardActions>
      <FlatButton label="Like" />
      <FlatButton label="Share" />
    </CardActions>
    <Comments />
  </Card>
);

export default FeedItem;
