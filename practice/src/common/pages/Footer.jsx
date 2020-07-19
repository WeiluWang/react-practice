import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles({
    root: {
      width: 'auto',
    },
  });

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Homepage" icon={<HomeIcon />} />
        <BottomNavigationAction label="Categroies" icon={<DashboardIcon />} />
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="User" icon={<PersonIcon />} />
      </BottomNavigation>
    );
  }


