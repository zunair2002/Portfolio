import React from 'react';
import './Contact.css';
import '../App.css';
import ParticlesBackground from '@/components/lightswind/particles-background';
import { Mail, Phone, MapPin, Briefcase, Linkedin, Instagram, Github } from "lucide-react";

const Contact = () => {
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
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center content-container">
      <div className="w-100" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div className="text-center mb-5">
          <h1 className="about-me-title" style={{ marginBottom: '1rem' }}>CONTACT ME</h1>
          <p className="lead" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', color: '#555' }}>Let's connect and build something amazing together.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Contact Info Card */}
          <div className="col-lg-8">
            <div className="contact-card h-100 p-5">
              <div className="d-flex flex-column">
                <div className="contact-header mb-4">
                  <h2 className="contact-name">Zunair Shahid</h2>
                  <a href="mailto:zunairshahid@gmail.com" className="contact-email">
                    <Mail size={28} style={{ marginRight: '0.75rem' }} />
                    zunairshahid@gmail.com
                  </a>
                </div>

                <hr style={{ width: '100%', borderColor: 'rgba(255, 255, 255, 0.25)', margin: '2rem 0' }} />

                <div className="contact-details">
                  <div className="contact-detail-item">
                    <Briefcase size={32} className="contact-icon" style={{ color: '#F28B82' }} />
                    <p className="contact-detail-text">Full-Stack (MERN) Developer | AI Developer (Python) | Web Designer (UI-UX)</p>
                  </div>
                  
                  <div className="contact-detail-item">
                    <Phone size={32} className="contact-icon" style={{ color: '#81C995' }} />
                    <p className="contact-detail-text">+92 3314774138</p>
                  </div>
                  
                  <div className="contact-detail-item">
                    <MapPin size={32} className="contact-icon" style={{ color: '#8AB4F8' }} />
                    <p className="contact-detail-text">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="col-lg-4">
            <div className="contact-card h-100 p-5">
              <div className="d-flex flex-column align-items-center text-center h-100 justify-content-center">
                <h3 className="social-title mb-4">Connect With Me</h3>
                <div className="social-links">
                  <a 
                    href="https://www.linkedin.com/in/zunair-shahid-1ab94327a/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="social-link-item"
                  >
                    <Linkedin size={48} style={{ color: '#0A66C2', marginBottom: '1rem' }} />
                    <span className="social-link-text">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/zunair2003/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="social-link-item"
                  >
                    <Instagram size={48} style={{ color: '#E4405F', marginBottom: '1rem' }} />
                    <span className="social-link-text">Instagram</span>
                  </a>
                  
                  <a 
                    href="https://github.com/zunair2002/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="social-link-item"
                  >
                    <Github size={48} style={{ color: '#181717', marginBottom: '1rem' }} />
                    <span className="social-link-text">GitHub</span>
                  </a>
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

export default Contact
