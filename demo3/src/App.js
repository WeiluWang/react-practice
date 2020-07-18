import React from 'react';
import BottomNav from './components/BottomNav';
import Header from './components/others/Header';
import Content from './components/Content';
import { Grid, Toolbar, Box } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ResponsiveDrawer from './components/ResponsiveDrawer';


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex"
  },

  bottomNav: {
  
  },
  drawer: {

  }
}))

function App() {
  const classes = useStyles;
  return (
    <div className="App">
      <Box>
        <ResponsiveDrawer />
      </Box>
      <BottomNav/ >
    </div>
  );
}

export default App;
