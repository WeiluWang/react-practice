import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});
const username = `Steve`;
const userid = `Steve@it.com`;
const section = {
    width: "100%",
    paddingTop: 5,
    color:"white",
    backgroundColor: "#FF3C3C"
  };
export default function ImageAvatars() {
  const classes = useStyles();

  return (
   // <Grid container wrap="nowrap" spacing={2}></Grid>
   <div style={section}>
    <Grid container justify="Left" alignItems="center"  background= "primary">
        <Grid item>
          <Avatar alt="Remy Sharp" src="practice\src\common\pages\client.jpg" className={classes.bigAvatar} />
        </Grid>
        <Grid item xs>
          <Typography noWrap variant='h5'>{username}</Typography>
          <Typography noWrap gutterBottom="false">User id: {userid}</Typography>
        </Grid>
        <Grid item xs >
          <Typography align='right' component="p" variant='caption' >Address </Typography>
          <Typography align='right' component="p" variant='caption'>Messages </Typography>
        </Grid>
    </Grid>
    </div>
  );
}