import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          {/* 如果页面足够小，则两侧不留边距，否则两侧各留2，然后content是8 */}
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          {/*
            xs = {0} equals to xs = {false}
          */}
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
