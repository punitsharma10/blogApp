import React, { useEffect,useState} from 'react';
import ps from "../images/xd.png";
import {useNavigate } from 'react-router-dom';


const About = () => {
  const imgStyle = {
    width: '70%', 
    height: '80%', 
  };

  const navigate=useNavigate();
  const [userData,setUserData]=useState({});

const callAboutPage= async ()=>{
  try {
      const res=await fetch("/about",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);
      if(res.status!==200){
        const error=new Error(res.error);
        throw error;
      }
  } catch (err) {
    console.log(err);
    navigate("/login");
  }
}

  useEffect(()=>{
    callAboutPage();
  },[]);
  return (
    <>
    <div className='container emp-profile'>
      <form method="GET">
        <div className='row'>
          <div className='col-md-4'>
            <img src={ps} alt="" style={imgStyle}/>
          </div>

          <div className='col-md-6'>
            <div className='profile-head'>
              <h4>{userData.name}</h4>
              <h6>{userData.work}</h6>
              <p className='profile-rating mt-3 mb-5'>RANKINGS: <span>1/10</span></p>

              <ul class="nav nav-tabs" role='tablist'>
                 <li className="nav-item">
                  <a className="nav-link active" id='home-tab' data-toggle="tab" href="#home" role="tab">About</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" id='profile-tab' data-toggle="tab" href="#profile" role="tab">Timeline</a>
                    </li>
                </ul>
            </div>
          </div>

          <div className='col-md-2'>
            <input type="submit" className='profile-edit-btn' name='btnAddMore' value="Edit Profile" />
          </div>

        </div>

        <div className='row'>
          <div className='col-md-4'>
            <div className='profile-work'>
              <h5>WORK-LINK</h5>
              <a href="https://punitsharma10.github.io/" target='_blank' rel='noreferrer'>Portfolio</a>
              <br />
              <a href="https://github.com/punitsharma10" target='_blank' rel='noreferrer'>GitHub</a>
              <br />
              <a href="https://www.linkedin.com/in/punitsharma1009/" target='_blank' rel='noreferrer'>LinkedIn</a>
              <br />
              <a href="https://www.instagram.com/punit_kaushik1009/" target='_blank' rel='noreferrer'>Instagram</a>
            </div>
          </div>

          <div className='col-md-8 pl-5 about-info'>
            <div className='tab-content profile-tab' id="myTabContent">
              <div className='tab-pane fade show active' id="home" role='tabpanel' aria-labelledby='home-tab'>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>User ID</label>
                  </div>
                  <div className='col-md-6'>
                    <p>848271395</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>Name</label>
                  </div>
                  <div className='col-md-6'>
                    <p>{userData.name}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>Email</label>
                  </div>
                  <div className='col-md-6'>
                    <p>{userData.email}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>Phone</label>
                  </div>
                  <div className='col-md-6'>
                    <p>{userData.phone}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>Profession</label>
                  </div>
                  <div className='col-md-6'>
                    <p>Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
    </>
  );
}

export default About;
