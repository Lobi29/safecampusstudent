import React from 'react';

// assets
import logo from '../../assets/shield.png';

import classes from './Topbar.module.css';

const Topbar = ({ label }) => {
  return (
    <div className={classes.topbar}>
        <img className={classes.logo} src={logo} alt="logo" />
        <div className={classes.title}>{label}</div>
    </div>
  )
}

export default Topbar