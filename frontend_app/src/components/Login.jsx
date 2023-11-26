import React,{useState} from 'react';
import pp from "../images/pp.webp";
import { NavLink,useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const loginUser= async (e)=>{
    e.preventDefault();
    const res=await fetch("/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    });
    const data=await res.json();

    if(data.status===400 || !data){
      window.alert("Invalid username or password")
    }
    else{
      window.alert("login successful")
      navigate("/");
    }
  }
  return (
    <>
    <section className='signin'>
      <div className='container mt-50'>
        <div className='signin-content'>
            <div className='signin-form'>
            <h2 className='form-title'>Login</h2>
            <form method='POST' className='register-form' id="register-form">

              <div className='form-group'>
                <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-name"></i> 
                </label>
                <input type="email" name="email" id="email" placeholder='Your Email' autoComplete='off' 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}  />
              </div>

              <div className='form-group'>
                <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-name"></i> 
                </label>
                <input type="password" name="password" id="password" autoComplete='off' placeholder='Your Password'
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}  />
              </div>

              <div className='form-group form-button'>
                <input type="submit" name='signin' id='signin' className='form-submit' 
                value="Login"
                onClick={loginUser}/>
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
