import React from "react";
import Navbar from "../Navbar/Navbar";

const Container = ({children, keywords}) => {
  return (
    <>
      <Navbar/>
      <div>
        {children}
      </div>

    </>
  );
};

export default Container;