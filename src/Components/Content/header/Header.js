import React from 'react';

import classes from './Header.module.css';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <p>First Name Of Company</p>
        <p>Secound Name Of Company</p>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
