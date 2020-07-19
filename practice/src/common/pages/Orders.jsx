import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      width: 'auto',
    },
  });

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
      <div>
      <Button dense color="primary" >
        <DashboardIcon />待付款
      </Button>
        <Button dense color="primary" >
          <DashboardIcon />待收货
        </Button>
      <Button dense color="primary" >
        <DashboardIcon />待评价
      </Button>
        <Button dense color="primary" >
          <DashboardIcon />退货/售后
        </Button>
        <Button dense color="primary" >
          <DashboardIcon />全部订单
        </Button>
      </div>
      // <BottomNavigation
      //   value={value}
      //   onChange={(event, newValue) => {
      //     setValue(newValue);
      //   }}
      //   showLabels
      //   className={classes.root}
      // >
      //   <BottomNavigationAction label="Homepage" icon={<HomeIcon />} />
      //   <BottomNavigationAction label="Categroies" icon={<DashboardIcon />} />
      //   <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
      //   <BottomNavigationAction label="User" icon={<PersonIcon />} />
      // </BottomNavigation>
    );
  }


