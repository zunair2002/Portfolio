import React from 'react';
import '../App.css';
import ParticlesBackground from '@/components/lightswind/particles-background';

const Aboutme = () => {
  return (
    <>
      <ParticlesBackground
        colors={[
          "#F28B82",
          "#FDD663",
          "#81C995",
          "#8AB4F8",
          "#C58AF9"
        ]}
        size={6}
        countDesktop={80}
        countTablet={60}
        countMobile={40}
        zIndex={-1}
        height="100vh"
      />
      <div
        className="container-fluid min-vh-100 d-flex flex-column justify-content-start align-items-center text-center content-container"
        style={{ paddingTop: '60px' }} // Reduced top spacing
      >
        <div
          className="w-100"
          style={{ maxWidth: '1200px', padding: '0 15px' }}
        >
          <div className="container">
            <div className="profile-container">
              <h2
                className="wow-me-title"
                style={{ marginBottom: '50px' }} // Less space below title
              >
                ABOUT ME
              </h2>
              <div className="card" style={{ marginTop: '0',boxShadow: "0 10px 25px rgba(0,0,0,0.45)"}}>
                <div className="card-body" style={{ padding: '15px 15px' }}>
                  <p className="profile-bio" style={{ marginBottom: '15px' }}>
                    Hey,<br />
                    I am a MERN stack developer with experience in creating complete
                    end-to-end web applications using React, Node.js, Express.js, and
                    MongoDB. I design clean, responsive user interfaces, develop reliable
                    and scalable back-end APIs, and organize data efficiently to ensure
                    seamless communication between users and the server. In addition to my
                    full-stack skills, I work with modern AI technologies such as RAG,
                    LangChain, LangGraph, NumPy, and OpenCV, enabling me to build smarter,
                    faster, and more intelligent applications that integrate robust web
                    development with advanced AI capabilities.
                  </p>
                  <hr style={{ margin: '10px 0' }} />
                  <div
                    className="d-flex flex-wrap justify-content-center align-items-center gap-2 p-2"
                    style={{ marginTop: '5px' }}
                  >
                    <span className="skill-tag">MERN-stack</span>
                    <span className="skill-tag">UI-UX Design</span>
                    <span className="skill-tag">AI Developer</span>
                    <span className="skill-tag">Video-Editing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;