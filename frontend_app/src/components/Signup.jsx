import React from 'react';
import image from "../images/image.jpg";
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <section className='signup'>
      <div className='container mt-50'>
        <div className='signup-content'>
            <div className='signup-form'>
            <h2 className='form-title'>SignUp</h2>
            <form className='register-form' id="register-form">

              <div className='form-group'>
                <label htmlFor="name">
                  <i class="zmdi zmdi-account material-icons-name"></i> 
                </label>
                <input type="text" name="name" id="name" autoComplete='off' placeholder='Your Name' />
              </div>

              <div className='form-group'>
                <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-name"></i> 
                </label>
                <input type="email" name="email" id="email" autoComplete='off' placeholder='Your Email' />
              </div>

              <div className='form-group'>
                <label htmlFor="phone">
                  <i class="zmdi zmdi-phone-in-talk material-icons-name"></i> 
                </label>
                <input type="number" name="phone" id="phone" autoComplete='off' placeholder='Your Phone Number' />
              </div>

              <div className='form-group'>
                <label htmlFor="work">
                  <i class="zmdi zmdi-slideshow material-icons-name"></i> 
                </label>
                <input type="text" name="work" id="work" autoComplete='off' placeholder='Your Profession' />
              </div>

              <div className='form-group'>
                <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-name"></i> 
                </label>
                <input type="text" name="password" id="password" autoComplete='off' placeholder='Your Password' />
              </div>

              <div className='form-group'>
                <label htmlFor="cpassword">
                  <i class="zmdi zmdi-lock material-icons-name"></i> 
                </label>
                <input type="text" name="cpassword" id="cpassword" autoComplete='off' placeholder='Confirm Your Password' />
              </div>

              <div className='form-group form-button'>
                <input type="submit" name='signup' id='signup' className='form-submit' value="Register"/>
              </div>
            </form>
            </div>
            <div className='signup-image'>
              <figure>
                <img src={image} alt="" />
              </figure>
              <NavLink to="/login">I am already register</NavLink>
            </div>
            </div> 
        </div>
    </section>
    </>
  );
}

export default Signup;
