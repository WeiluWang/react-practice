import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import { blue, red } from '@material-ui/core/colors';


import Header from "./Header";
import Footer from "./Footer";
import Orders from "./Orders";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  iconHover: {
    '&:hover': {
      color: red[800],
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();
  const listStyle3 = {
    backgroundColor: '#FF3C3C'
  }

  return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <Orders/>
        </Grid>
        <Grid item container xs={12} sm={12} style={listStyle3}>
          <List component="nav" className={classes.root} aria-label="Header" >
            <ListItem button>
              <ListItemIcon>
                <LocalAtmOutlinedIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Wallet"/>
            </ListItem>
            <Divider orientation='vertical'/>
            <ListItem button >
            <ListItemText 
               primary="8754.00" secondary="Amount"/>
            </ListItem>
            <Divider orientation='vertical'/>
            <ListItem button >
            <ListItemText 
              primary="4541" secondary="Score"/>
            </ListItem>
         </List>
        </Grid>
        <Grid item container xs={6} sm={3}>
          <Button >                               
              <Avatar alt="browse history" src="./client.jpg" />
              <div>browse history</div>
          </Button> 
        </Grid>
        <Grid item container xs={6} sm={3}>
          <Button >                               
              <Avatar alt="help" src="./src/common/images/client.jpg" />
              <div>help</div>
          </Button> 
        </Grid>
        <Grid item container xs={6} sm={3}>
          <Button >                               
              <Avatar alt="share" src="./src/common/images/client.jpg" />
              <div>share</div>
          </Button> 
        </Grid>
        <Grid item container xs={6} sm={3}>
          <Button >                               
              <Avatar alt="custom service" src="./src/common/images/client.jpg" />
              <div>custom service</div>
          </Button> 
        </Grid>
        <Grid item container xs={6} sm={3}>
          <Button >                               
              <Avatar alt="community" src="./src/common/images/client.jpg" />
              <div>community</div>
          </Button> 
        </Grid>
        <Grid item container xs={6} sm={3}>
          <Button >                               
              <Avatar alt="courses" src="./src/common/images/client.jpg" />
              <div>courses</div>
          </Button> 
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
  );
}
