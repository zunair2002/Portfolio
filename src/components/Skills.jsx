import React from 'react';
import '../App.css';
import ParticlesBackground from '@/components/lightswind/particles-background';
import { Code, Server, Users, Award, BrainCircuit } from "lucide-react";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";

const Skills = () => {
  // Common Shadow and Reset Transform
  const cardStyle = { 
    boxShadow: '0 10px 25px rgba(0,0,0,0.25)', 
    margin: '0',
    transform: 'none',
    transition: 'none'
  };
  
  const certificates = [
    { id: 1, img: 'devops certificate.jpg', title: 'DEVOPS Certificate', date: '03-09-2024 to 15-10-2024', color: '#F28B82' },
    { id: 2, img: 'FS certificate.png', title: 'MERN Certificate', date: '16-04-2022 to 07-07-2022', color: '#8AB4F8' },
    { id: 3, img: 'figma certificate.png', title: 'UI-UX Certificate', date: '12-04-2023 to 15-05-2023', color: '#81C995' }
  ];

  const skillSections = [
    { 
        title: "Frontend Development", 
        icon: <Code size={56} style={{ marginBottom: '1.5rem', color: '#F28B82' }} />, 
        tags: ["HTML", "CSS", "JavaScript", "TypeScript", "jQuery", "Bootstrap", "Tailwind CSS", "React", "DaisyUI"],
        color: '#F28B82'
    },
    { 
        title: "Backend Development", 
        icon: <Server size={56} style={{ marginBottom: '1.5rem', color: '#8AB4F8' }} />, 
        tags: ["Node.js", "Express", "PHP", "Laravel", "Git", "Git Lab", "GitHub", "Docker","MongoDB", "MySQL", "PostgreSQL"],
        color: '#8AB4F8'
    },
    { 
        title: "Professional Skills", 
        icon: <Users size={56} style={{ marginBottom: '1.5rem', color: '#C58AF9' }} />, 
        tags: ["Communication", "Leadership", "Problem-Solving", "Adaptability", "Teamwork", "Creativity", "Focus", "Learning Agility"],
        color: '#C58AF9'
    }
  ];

  return (
    <>
      <ParticlesBackground
        colors={["#F28B82", "#FDD663", "#81C995", "#8AB4F8", "#C58AF9"]}
        size={6} countDesktop={80} countTablet={60} countMobile={40} zIndex={-1} height="100%"
      />
      
      <div id="skills" className="container-fluid min-vh-100 d-flex flex-column justify-content-center content-container">
        <div className="w-100" style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1rem' }}>
          
          <div className="text-center mb-5">
            <h1 className="about-me-title" style={{ marginBottom: '1rem' }}>SKILLS & EXPERTISE</h1>
            <p className="lead" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', color: '#555' }}>A collection of my technical and professional abilities.</p>
          </div>

          <div className="container-fluid p-0">
            {/* --- CERTIFICATES SECTION --- */}
            <h4 className="text-center" style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '2rem', fontWeight: 700, color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={40} style={{ marginRight: '1rem' }} /> Certificates
            </h4>

            <div className="row g-1 justify-content-center">
              {certificates.map((cert) => (
                <div className="col-lg-4 col-md-6 d-flex" key={cert.id}>
                  <GlowingCards className="w-100">
                    <GlowingCard glowColor={cert.color} className="polaroid-card skill-card w-100 h-100 no-hover-effect" style={cardStyle}>
                      <div className="d-flex flex-column h-100">
                        <div className="polaroid-image-container">
                          <img className="polaroid-image" src={cert.img} alt={cert.title} style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                        </div>
                        <div className="polaroid-content">
                          <div className="polaroid-date" style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#333', marginBottom: '0.75rem' }}>{cert.date}</div>
                          <a href="https://www.linkedin.com/in/zunair-shahid-1ab94327a/" className="polaroid-link" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '1rem', fontWeight: 600, color: '#0f7acd', textDecoration: 'none' }}>{cert.title}</a>
                        </div>
                      </div>
                    </GlowingCard>
                  </GlowingCards>
                </div>
              ))}
            </div>

            {/* --- SKILLS SECTION --- */}
            <div className="row g-1 justify-content-center">
              <h4 className="mb-4 text-center" style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '2rem', fontWeight: 700, color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BrainCircuit size={40} style={{ marginRight: '1rem' }} /> My Skills
            </h4>
            <hr style={{ width: '95%', borderColor: 'rgba(0, 0, 0, 0.25)', marginBottom: '1.5rem' }} />
              {skillSections.map((skill, index) => (
                <div className="col-lg-6 d-flex" key={index}>
                  <GlowingCards className="w-100">
                    <GlowingCard glowColor={skill.color} className="skill-card h-100 p-4 w-100 no-hover-effect" style={cardStyle}>
                      <div className="d-flex flex-column align-items-center text-center">
                        {skill.icon}
                        <h4 className="mb-4" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700 }}>{skill.title}</h4>
                        <hr className="w-100 mb-4" style={{ opacity: 0.2 }} />
                        <div className="d-flex flex-wrap gap-2 justify-content-left">
                          {skill.tags.map(tag => (
                            <span key={tag} className="skill-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </GlowingCard>
                  </GlowingCards>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;