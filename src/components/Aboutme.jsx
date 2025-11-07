import React from 'react';
import '../App.css';
const Aboutme = () => {
  return (
    <>
      <div className="animated-background"></div>
      <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center text-center content-container">
        <div className="w-100" style={{ maxWidth: '1200px', padding: '0 15px' }}>
                    <h1 className="fancy-title">Portfolio</h1>
          <img
            className="main-pic" 
            src="imgg.jpeg"
            alt="Profile"
          />
          <p className="lead text-muted mb-4">Zunair Shahid</p>
          <div className="col-12 col-md-8 col-lg-6 mx-auto mb-5">
          </div>

          <div className="container about-me-content">
            <div className="profile-container">
              <div class="card glass-card">
                <div class="card-body">
              <p className="profile-bio">
                Hey,<br />
                I'm Zunair Shahid. As a MERN Stack Developer, I specialize in building complete, end-to-end web applications using JavaScript. My expertise lies in crafting dynamic and responsive user interfaces with React on the front-end, while on the back-end, I leverage Node.js and Express.js to create robust, scalable server-side logic and APIs. I manage and structure data efficiently using MongoDB, ensuring a seamless connection between the user and the server.
              </p>
              <hr/>
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 p-2">
                <span className="skill-tag">Video-editing</span>
                <span className="skill-tag">UI-UX</span>
                <span className="skill-tag">Web Developer</span>
                <span className="skill-tag">Full-stack</span>
              </div>
              </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Aboutme;