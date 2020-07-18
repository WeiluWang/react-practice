import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  typographyStles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStles}>
          This is the header
        </Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
