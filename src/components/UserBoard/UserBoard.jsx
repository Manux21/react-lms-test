import React from 'react';
import classes from './UserBoard.module.css'
import AlarmBell from '../../svg/Alarm Bell.svg'
import Avatar from '../../img/Avatar.png'
import ArrowDown from '../../svg/ArrowDown.svg'

const MyComponent = () => {
  return (
    <div className={classes.userBoard}>
      <div className={classes.userHeader}>

          <img className={classes.notification} src={AlarmBell} alt=""/>

          <div className={classes.profile}>
            <img className={classes.avatar} src={Avatar} alt="avatar"/>
            <p>Ivan Egorov</p>
            <img className={classes.arrowDown} src={ArrowDown} alt="ArrowDown"/>
          </div>

      </div>
    </div>
  );
};

export default MyComponent;
