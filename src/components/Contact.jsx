import React from 'react';
import './Contact.css';
import '../App.css';
import ParticlesBackground from '@/components/lightswind/particles-background';
import { Phone, MapPin, Briefcase, Linkedin, Instagram, Github } from "lucide-react";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";

const Contact = () => {
  // Inline style for the card itself
  const cardStyle = { 
    boxShadow: '0 10px 25px rgba(0,0,0,0.25)', 
    margin: '0',
    transform: 'none',
    transition: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    height: '100%', // Card ko column ki poori height lene ke liye
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <>
      <ParticlesBackground
        colors={["#F28B82", "#FDD663", "#81C995", "#8AB4F8", "#C58AF9"]}
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
            <p className="lead" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', color: '#555' }}>
              Let's connect and build something amazing together.
            </p>
          </div>

          {/* align-items-stretch class columns ko vertically ek barabar rakhti hai */}
          <div className="row g-4 d-flex align-items-stretch justify-content-center">
            
            {/* LEFT CARD (Contact Info) */}
            <div className="col-lg-8 d-flex">
              <GlowingCards className="w-100" style={{ display: 'flex', height: '100%' }}>
                <GlowingCard 
                  glowColor="#8AB4F8" 
                  className="contact-card p-lg-5 p-4 no-hover-effect w-100" 
                  style={cardStyle}
                >
                  <div className="d-flex flex-column h-100">
                    <div className="contact-header mb-4">
                      <h2 className="contact-name">Zunair Shahid</h2>
                      <a href="mailto:zunairshahid@gmail.com" className="contact-email">
                        zunairshahid@gmail.com
                      </a>
                    </div>

                    <hr style={{ width: '100%', borderColor: 'rgba(0, 0, 0, 0.1)', margin: '2rem 0' }} />

                    <div className="contact-details">
                      <div className="contact-detail-item">
                        <Briefcase size={32} className="contact-icon" style={{ color: '#F28B82' }} />
                        <p className="contact-detail-text">Full-Stack Developer | JS, TS | React.js, Next.js | Node.js, Express | MongoDB | UI-UX</p>
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
                </GlowingCard>
              </GlowingCards>
            </div>

            {/* RIGHT CARD (Social Links) */}
            <div className="col-lg-4 d-flex">
              <GlowingCards className="w-100" style={{ display: 'flex', height: '100%' }}>
                <GlowingCard 
                  glowColor="#C58AF9" 
                  className="contact-card p-lg-5 p-4 no-hover-effect w-100" 
                  style={cardStyle}
                >
                  <div className="d-flex flex-column align-items-center text-center h-100 justify-content-center py-4">
                    <div className="social-links mt-2 mb-2" style={{ width: '100%' }}>
                      <a href="https://www.linkedin.com/in/zunair-shahid-1ab94327a/" target="_blank" rel="noreferrer" className="social-link-item">
                        <Linkedin size={36} style={{ color: '#0A66C2', marginBottom: '1.2rem' }} />
                        <span className="social-link-text">LinkedIn</span>
                      </a>
                      
                      <a href="https://www.instagram.com/zunair2003/" target="_blank" rel="noreferrer" className="social-link-item">
                        <Instagram size={36} style={{ color: '#E4405F', marginBottom: '1.2rem' }} />
                        <span className="social-link-text">Instagram</span>
                      </a>
                      
                      <a href="https://github.com/zunair2002/" target="_blank" rel="noreferrer" className="social-link-item">
                        <Github size={36} style={{ color: '#181717', marginBottom: '1.2rem' }} />
                        <span className="social-link-text">GitHub</span>
                      </a>
                    </div>
                  </div>
                </GlowingCard>
              </GlowingCards>
            </div>

          </div>
        </div>
      </div>
      <style>{`.no-hover-effect:hover { transform: none !important; transition: none !important; }`}</style>
    </>
  );
};

export default Contact;