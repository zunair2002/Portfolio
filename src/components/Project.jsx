import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards"
import ParticlesBackground from '@/components/lightswind/particles-background';

const Project = () => {
  const cardProjects = [
    {
      id: 1,
      type: "Project",
      name: "ChatGO",
      description:
        "A real-time chat application with Socket.io messaging and secure authentication, featuring a responsive interface and a scalable backend for smooth, reliable communication and a scalable backend for smooth.",
    },
    {
      id: 2,
      type: "Project",
      name: "WalletWave",
      description:
        "A modern crypto-wallet interface that shows live cryptocurrency data and key info for popular coins. It also features an interactive Bitcoin chart to track market trends in real time."
    },
    {
      id: 3,
      type: "Project",
      name: "Expense Tracker",
      description:
        "An expense tracker logs all your income and spending using simple charts to show exactly where your money goes. This helps you easily understand your financial habits and make smarter plans for your budget."
    },
  ];

  const glowColors = [
    {id: 0, color: "#F28B82"},
    {id: 1, color: "#FDD663"},
    {id: 2, color: "#81C995"},
    {id: 3, color: "#C58AF9"}
  ];

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

      <div
        className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center text-center content-container"
        style={{ padding: '80px 0' }} 
      >
        <div className="w-100" style={{ maxWidth: '1200px' }}>
          <div className="container about-me-content">
            <div className="profile-container">
              <h2 className="about-me-title" style={{ marginBottom: '40px' }}>
                PROJECT DETAILS
              </h2>
              <div className="container-fluid">
                <div className="row g-4 justify-content-center"> {/* Bootstrap g-4 handling spacing properly */}
                  {cardProjects.map((project, index) => {
                    const glow = glowColors[index % glowColors.length];
                    return (
                      <div
                        className="col-lg-6 col-md-6 d-flex" 
                        key={project.id}
                      >
                        {/* Wrapper height fix */}
                        <GlowingCards style={{ width: '100%', height: '400px' }}> 
                          <GlowingCard
                            glowColor={glow.color}
                            style={{
                              boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                              height: "400px !important", // Forced important to override CSS
                              minHeight: "400px",
                              margin: 0,
                              display: "flex",
                              flexDirection: "column"
                            }}
                          >
                            <Link
                              to={`/project/${project.id}`}
                              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}
                            >
                              <div className="card-body text-start" style={{ padding: '30px', flex: 1 }}>
                                <p className="mb-2 text-muted small">{project.type}</p>
                                <h2 className="card-title mb-4" style={{ fontWeight: '700' }}>{project.name}</h2>
                                <p className="card-text text-secondary" style={{ lineHeight: '1.7' }}>
                                  {project.description}
                                </p>
                              </div>
                            </Link>
                          </GlowingCard>
                        </GlowingCards>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;