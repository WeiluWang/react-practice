import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Toolbar from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import WidgetsIcon from '@material-ui/icons/Widgets';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  
  bottomNav: {
    overflow: "auto",
    width: "100%"
  },
 
}))


const BottomNav = () => {
  const classes = useStyles();
  return (
    <div>
      <BottomNavigation className={classes.bottomNav}
        showLabels
      >
        <BottomNavigationAction label="首页" icon={<HomeIcon />} />
        <BottomNavigationAction label="分类" icon={<WidgetsIcon />} />
        <BottomNavigationAction
          label="购物车"
          icon={<AddShoppingCartIcon />}
        />
        <BottomNavigationAction label="个人中心" icon={<PersonIcon />} />
      </BottomNavigation>

    </div>
  );
};

export default BottomNav;
