import React from 'react';
import classes from './Register.module.css'
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Logo from '../svg/atom-solid.svg'

const Register = () => {
  return (
    <div className={classes.login}>
      <div className={classes.formWrapper}>

        <div className={classes.welcome}>
          <img src={Logo} className={classes.welcomeLogo} alt=""/>
          <h1 style={{color: '#5960F9', fontWeight: 'bold'}}>ATOM</h1>
          <p className={classes.welcomeText}> Welcome to the best <br/> education platform</p>
        </div>


        <form>
          <Input type='email' placeholder={'email'}/>
          <Input type='text' placeholder={'username'}/>
          <Input type='password' placeholder={'password'}/>

          <Button text='Register'/>

        </form>
      </div>
    </div>
  );
};

export default Register;
