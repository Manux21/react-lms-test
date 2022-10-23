import React from 'react';
import classes from './Navbar.module.css'
import NavButton from "../NavButton/NavButton";
import SpeechIcon from '../../svg/2 Speech Bubbles (Chat).svg'
import Mortarboard from '../../svg/Mortarboard.svg'
import LayoutGrid from '../../svg/Layout Grid.svg'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div style={{marginTop: '125px'}}>
        <NavButton icon={LayoutGrid}/>
        <NavButton icon={Mortarboard}/>
        <NavButton icon={SpeechIcon}/>
      </div>
    </div>
  );
};

export default Navbar;
