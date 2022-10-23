import React from "react";
import Navbar from "../Navbar/Navbar";
import UserBoard from "../UserBoard/UserBoard";
import classes from './Container.module.css'
import Dashboard from "../Dashboard/Dashboard";

const Container = ({children, keywords}) => {
  return (
    <div className={classes.container}>
      <Navbar/>
      <Dashboard/>
      <UserBoard/>
    </div>
  );
};

export default Container;