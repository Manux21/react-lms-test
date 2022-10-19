import React from "react";
import classes from './Container.module.css'

const Container = ({children, keywords}) => {
  return (
    <>
      <div className='navbar'>
        Hello
      </div>
      <div>
        {children}
      </div>

    </>
  );
};

export default Container;