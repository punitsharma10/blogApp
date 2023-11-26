import React from 'react';
import ps from "../images/ps.jpg";
const About = () => {
  const imgStyle = {
    width: '70%', 
    height: '80%', 
  };

  return (
    <>
    <div className='container emp-profile'>
      <form method=''>
        <div className='row'>
          <div className='col-md-4'>
            <img src={ps} alt="" style={imgStyle}/>
          </div>

          <div className='col-md-6'>
            <div className='profile-head'>
              <h4>Punit Sharma</h4>
              <h6>MERN Developer</h6>
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
              <h5>WORK LINK</h5>
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
                    <p>855555555555</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>Name</label>
                  </div>
                  <div className='col-md-6'>
                    <p>Punit Sharma</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>Name</label>
                  </div>
                  <div className='col-md-6'>
                    <p>Punit Sharma</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>Email</label>
                  </div>
                  <div className='col-md-6'>
                    <p>paras77295@gmail.com</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>Phone</label>
                  </div>
                  <div className='col-md-6'>
                    <p>9997222612</p>
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
