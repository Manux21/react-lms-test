import React from 'react';
import classes from './NavButton.module.css'

const NavButton = ({icon}) => {
  return (
    <button>
      <img src={icon} alt="icon"/>
    </button>
  );
};

export default NavButton;
