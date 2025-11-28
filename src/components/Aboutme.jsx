import React from 'react';
import '../App.css';
import ParticlesBackground from '@/components/lightswind/particles-background';

const Aboutme = () => {
  return (
    <>
    <div style={{ position: "relative", minHeight: "100vh" }}>
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
            <ParticlesBackground
              colors={['#00ffff', '#ff00ff', '#ffaa00']}
              size={3}
              countDesktop={200}
                    countTablet={250}
                    countMobile={300}
              zIndex={-1}
              height="100%"
            />
          </div>
      <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center text-center content-container">
        <div className="w-100" style={{ maxWidth: '1200px', padding: '0 15px'}}>
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
                <div class="card-bodyy">
              <p className="profile-bio">
                Hey,<br />
I am a MERN stack developer with experience in creating complete end-to-end web applications using React, Node.js, Express.js, and MongoDB. I design clean, responsive user interfaces, develop reliable and scalable back-end APIs, and organize data efficiently to ensure seamless communication between users and the server. In addition to my full-stack skills, I work with modern AI technologies such as RAG, LangChain, LangGraph, NumPy, and OpenCV, enabling me to build smarter, faster, and more intelligent applications that integrate robust web development with advanced AI capabilities.
              </p>
              <hr/>
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 p-2">
                <span className="skill-tag">MERN-stack</span>
                <span className="skill-tag">UI-UX Design</span>
                <span className="skill-tag">AI Devloper</span>
                <span className="skill-tag">Vedio-Editing</span>
              </div>
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