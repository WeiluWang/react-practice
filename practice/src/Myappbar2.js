import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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

export default function Mybar2(){
    const classes = useStyles();
    return(
        <div>
            <AppBar position='relative' color='white'>
                <Toolbar>

                </Toolbar>
            </AppBar>
        </div>
    );
}