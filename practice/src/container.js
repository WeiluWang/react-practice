import React from 'react';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles({
  root: {
    marginTop: 100,
    marginBottom: 100,
    
  }, image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});
const tileData = [
  {
    img: logo,
    title: 'image1',
    author: 'author',
  },
  {
    img: logo,
    title: 'image2',
    author: 'author',
  },
  {
    img: logo,
    title: 'image3',
    author: 'author',
  },
  {
    img: logo,
    title: 'image4',
    author: 'author',
  },
  {
    img: logo,
    title: 'image5',
    author: 'author',
  },
  {
    img: logo,
    title: 'image6',
    author: 'author',
  },
  {
    img: logo,
    title: 'image7',
    author: 'author',
  },

];
export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {tileData.map((tile) => (
          <Grid item xs={12} sm={3} container spacing={3}>
            <ButtonBase>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={logo} />
              </ButtonBase>
            </Grid>
            <Grid item xs={6} sm container>
              <Grid item xs container direction="column" spacing={2}>
                
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                </Typography>
                  </Grid>
                
              </Grid>
            </Grid>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>

    </div>
  );
}
