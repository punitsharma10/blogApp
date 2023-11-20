import React from 'react';
import pp from "../images/pp.webp";
import { NavLink } from 'react-router-dom';


const Login = () => {
  return (
    <>
    <section className='signin'>
      <div className='container mt-50'>
        <div className='signin-content'>
            <div className='signin-form'>
            <h2 className='form-title'>Login</h2>
            <form className='register-form' id="register-form">

              <div className='form-group'>
                <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-name"></i> 
                </label>
                <input type="email" name="email" id="email" autoComplete='off' placeholder='Your Email' />
              </div>

              <div className='form-group'>
                <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-name"></i> 
                </label>
                <input type="text" name="password" id="password" autoComplete='off' placeholder='Your Password' />
              </div>

              <div className='form-group form-button'>
                <input type="submit" name='signin' id='signin' className='form-submit' value="Login"/>
              </div>

            </form>
            </div>
            <div className='signin-image'>
              <figure>
                <img src={pp} alt="" />
              </figure>
              <NavLink to="/signup"><b>Create an Account</b></NavLink>
            </div>
            </div> 
        </div>
    </section>
    </>
  );
}

export default Login;
