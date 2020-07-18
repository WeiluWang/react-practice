import React from 'react';
import './App.css';
import { Button, Typography, colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
    color: 'red',
    fontSize: '30px',
  },
  buttonStyles: {
    color: 'green',
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography
        className={classes.helloThereStyle}
        color="primary"
        variant="subtitle1"
      >
        You know
      </Typography>
      <Button className={classes.buttonStyles} disabled={false}>
        This is our first button
      </Button>
      <Button color="secondary" fullWidth>
        hello
      </Button>
      <Button variant="contained" color="primary">
        world
      </Button>
    </div>
  );
}
