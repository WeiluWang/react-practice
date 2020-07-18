import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuAppBar from './navbar';
import ComplexGrid from './card'
import FullWidthGrid from './container'
import TiltebarGridList from './TitlebarGridList'
import SimpleBottomNavigation from './footbar'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    
    <FullWidthGrid />
    <MenuAppBar />
    <SimpleBottomNavigation />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
