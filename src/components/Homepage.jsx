import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  
  return (
    <>
      <div className="animated-background"></div>
      <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center text-center content-container">
        <div className="w-100" style={{ maxWidth: '1200px', padding: '0 15px' }}>
          <h1 className="fancy-title">My Portfolio</h1>
          <img
            className="main-pic"
            src="imgg.jpeg"
            alt="Profile"
          />
          <p className="lead text-muted mb-4">Zunair Shahid</p>
          <div className="col-12 col-md-8 col-lg-6 mx-auto mb-5">
          </div>
          <div className="container">
            <div className="row justify-content-center g-4">

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Link to="/aboutme" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="p-4 text-center h-100 glass-box">
                    <i className="bi bi-person-circle fs-2 text-dark mb-3"></i>
                    <p className="fw-bold pt-3">Myself</p>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Link to="/skills" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="p-4 text-center h-100 glass-box">
                    <i className="bi bi-code-slash fs-2 text-dark mb-3"></i>
                    <p className="fw-bold pt-3">Skills</p>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Link to="/project" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="p-4 text-center h-100 glass-box">
                    <i className="bi bi-briefcase-fill fs-2 text-dark mb-3"></i>
                    <p className="fw-bold pt-3">Projects</p>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Link to="/contactme" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="p-4 text-center h-100 glass-box">
                    <i className="bi bi-envelope-paper-heart fs-2 text-dark mb-3"></i>
                    <p className="fw-bold pt-3">Contact us</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;