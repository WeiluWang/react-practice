import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
//import GridList from '@material-ui/core/GridList';
//import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import logo from './logo.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    
    
    paper: {
        padding: theme.spacing(0),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width:100,
        height:100,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    
    
  }));
/*
              <Grid container direction="column" justify="center" alignItems="stretch">
                <Grid item xs={12} >
                    <Box className={classes.paper}>item</Box>
                    <img src={logo} height='200px'></img>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.paper}>item</Box>
                </Grid>
              </Grid>
*/
  export default function MyGridList(){
      const classes = useStyles();

      const Formgrid = (log,word)=> {
        
        return (
        <React.Fragment>
          <Paper className={classes.paper}>
              <Grid container spacing={1} direction="row">
                <Grid item xs>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={log} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={8} sm container>
                  <Grid item xs container direction="column" spacing={0}>
                    <Grid item>
                      <Typography gutterBottom variant="subtitle1">
                        Standard license {word+""}
                      </Typography>
                    </Grid>
                    <Grid item >
                      <Typography variant="body2" gutterBottom>
                        Full resolution 
                      </Typography>
                    </Grid>
                    <Grid item >
                      <Typography variant="body2" color="textSecondary">
                        ID:11234
                      </Typography>
                    
                    </Grid>
                    
                  </Grid>
                  
                </Grid>
              </Grid>
            </Paper>
          </React.Fragment>
        );
      }
      return (
          <div className={classes.paper}>
            {Formgrid(logo,"1")}
            {Formgrid(logo,"2")}
            {Formgrid(logo,"3")}
            {Formgrid(logo,"4")}
            {Formgrid(logo,"5")}
          </div>
      );
  }