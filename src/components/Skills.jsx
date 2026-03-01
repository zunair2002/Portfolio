import React from 'react';
import '../App.css';
import ParticlesBackground from '@/components/lightswind/particles-background';
import { Code, Server, Database, Users, Award } from "lucide-react";

const Skills = () => {
  return (
    <>
    <ParticlesBackground
      colors={[ "#F28B82", 
  "#FDD663", 
  "#81C995", 
  "#8AB4F8", 
  "#C58AF9"
      ]
    }   
      size={6}
      countDesktop={80}
      countTablet={60}
      countMobile={40}
      zIndex={-1}
      height="100vh"
    />
      <div id="skills" className="container-fluid min-vh-100 d-flex flex-column justify-content-center content-container">
        <div className="w-100" style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1rem' }}>
          <div className="text-center mb-5">
            <h1 className="about-me-title" style={{ marginBottom: '1rem' }}>SKILLS & EXPERTISE</h1>
            <p className="lead" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', color: '#555' }}>A collection of my technical and professional abilities.</p>
          </div>

          {/* Certificates Section - Polaroid Style */}
          <div className="mb-5">
            <h4 className="mb-5 text-center" style={{ 
              fontFamily: '"Montserrat", sans-serif', 
              fontSize: 'clamp(2rem, 3vw, 2.5rem)', 
              fontWeight: 700,
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Award size={40} style={{ marginRight: '1rem' }} />
              Certificates
            </h4>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="polaroid-card skill-card">
                  <div className="d-flex flex-column h-100">
                    <div className="polaroid-image-container">
                      <img 
                        className="polaroid-image" 
                        src='devops certificate.jpg' 
                        alt="DevOps Certificate" 
                      />
                    </div>
                    <div className="polaroid-content">
                      <div className="polaroid-date" style={{ 
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                        fontWeight: 600,
                        color: '#333',
                        marginBottom: '0.75rem'
                      }}>
                        03-09-2024 to 15-10-2024
                      </div>
                      <a 
                        href="https://www.linkedin.com/in/zunair-shahid-1ab94327a/" 
                        className="polaroid-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          fontFamily: '"Montserrat", sans-serif',
                          fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                          fontWeight: 600,
                          color: '#0f7acd',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        DEVOPS Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="polaroid-card skill-card">
                  <div className="d-flex flex-column h-100">
                    <div className="polaroid-image-container">
                      <img 
                        className="polaroid-image" 
                        src='FS certificate.png' 
                        alt="MERN Certificate" 
                      />
                    </div>
                    <div className="polaroid-content">
                      <div className="polaroid-date" style={{ 
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                        fontWeight: 600,
                        color: '#333',
                        marginBottom: '0.75rem'
                      }}>
                        16-04-2022 to 07-07-2022
                      </div>
                      <a 
                        href="https://www.linkedin.com/in/zunair-shahid-1ab94327a/" 
                        className="polaroid-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          fontFamily: '"Montserrat", sans-serif',
                          fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                          fontWeight: 600,
                          color: '#0f7acd',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        MERN Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="polaroid-card skill-card">
                  <div className="d-flex flex-column h-100">
                    <div className="polaroid-image-container">
                      <img 
                        className="polaroid-image" 
                        src='figma certificate.png' 
                        alt="UI-UX Certificate" 
                      />
                    </div>
                    <div className="polaroid-content">
                      <div className="polaroid-date" style={{ 
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                        fontWeight: 600,
                        color: '#333',
                        marginBottom: '0.75rem'
                      }}>
                        12-04-2023 to 15-05-2023
                      </div>
                      <a 
                        href="https://www.linkedin.com/in/zunair-shahid-1ab94327a/" 
                        className="polaroid-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          fontFamily: '"Montserrat", sans-serif',
                          fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                          fontWeight: 600,
                          color: '#0f7acd',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        UI-UX Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Cards */}
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6">
              <div className="skill-card h-100 p-4">
                <div className="d-flex flex-column align-items-center text-center">
                  <Code size={56} style={{ marginBottom: '1.5rem', color: '#F28B82' }} />
                  <h4 style={{ 
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight: 700,
                    color: '#333',
                    marginBottom: '1.5rem'
                  }}>
                    Frontend Development
                  </h4>
                  <hr style={{ width: '100%', borderColor: 'rgba(255, 255, 255, 0.25)', marginBottom: '1.5rem' }} />
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="skill-tag">HTML</span>
                    <span className="skill-tag">CSS</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">jQuery</span>
                    <span className="skill-tag">Bootstrap</span>
                    <span className="skill-tag">Tailwind CSS</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">DaisyUI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill-card h-100 p-4">
                <div className="d-flex flex-column align-items-center text-center">
                  <Server size={56} style={{ marginBottom: '1.5rem', color: '#8AB4F8' }} />
                  <h4 style={{ 
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight: 700,
                    color: '#333',
                    marginBottom: '1.5rem'
                  }}>
                    Backend Development
                  </h4>
                  <hr style={{ width: '100%', borderColor: 'rgba(255, 255, 255, 0.25)', marginBottom: '1.5rem' }} />
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express</span>
                    <span className="skill-tag">PHP</span>
                    <span className="skill-tag">Laravel</span>
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">Git Lab</span>
                    <span className="skill-tag">GitHub</span>
                    <span className="skill-tag">Docker</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill-card h-100 p-4">
                <div className="d-flex flex-column align-items-center text-center">
                  <Database size={56} style={{ marginBottom: '1.5rem', color: '#81C995' }} />
                  <h4 style={{ 
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight: 700,
                    color: '#333',
                    marginBottom: '1.5rem'
                  }}>
                    Database Management
                  </h4>
                  <hr style={{ width: '100%', borderColor: 'rgba(255, 255, 255, 0.25)', marginBottom: '1.5rem' }} />
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">MySQL</span>
                    <span className="skill-tag">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill-card h-100 p-4">
                <div className="d-flex flex-column align-items-center text-center">
                  <Users size={56} style={{ marginBottom: '1.5rem', color: '#C58AF9' }} />
                  <h4 style={{ 
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight: 700,
                    color: '#333',
                    marginBottom: '1.5rem'
                  }}>
                    Professional Skills
                  </h4>
                  <hr style={{ width: '100%', borderColor: 'rgba(255, 255, 255, 0.25)', marginBottom: '1.5rem' }} />
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="skill-tag">Communication</span>
                    <span className="skill-tag">Leadership</span>
                    <span className="skill-tag">Problem-Solving</span>
                    <span className="skill-tag">Adaptability</span>
                    <span className="skill-tag">Teamwork</span>
                    <span className="skill-tag">Creativity</span>
                    <span className="skill-tag">Focus</span>
                    <span className="skill-tag">Learning Agility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;