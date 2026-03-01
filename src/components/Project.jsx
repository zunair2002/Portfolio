







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
        "A real-time chat application with Socket.io messaging and secure authentication, featuring a responsive interface and a scalable backend for smooth, reliable communication.",
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
    {
      id: 4,
      type: "Final Year Project",
      name: "Study Bhai",
      description:
        "An educational platform for students providing personalized experiences, interactive lessons, and instant doubt clearing through an AI chatbot.",
    },
  ];


  let glowColors=[{id: 0, color: "#F28B82"},{id: 1, color: "#FDD663"},{id: 2, color: "#81C995"},{id: 3, color: "#C58AF9"}]
  const glow = glowColors.find(gc => gc.id === cardProjects.id);
  console.log(cardProjects, "GLOWWW")
  return (
    <>
    <ParticlesBackground
      colors={[ "#F28B82", "#FDD663", "#81C995", "#8AB4F8", "#C58AF9"]
    }   
      size={6}
      countDesktop={80}
      countTablet={60}
      countMobile={40}
      zIndex={-1}
      height="100vh"
    />

      <div className="animated-background"></div>
      <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center text-center content-container">
        <div className="w-100" style={{ maxWidth: '1200px', padding: '0 15px' }}>
          <div className="container about-me-content">
            <div className="profile-container">
              <h2 className="about-me-title">PROJECT DETAILS</h2>
              <div className="container py-5">
                <div className="row justify-content-center g-4">
                  {cardProjects.map((project,index) => (
                    <div className="col-lg-6 col-md-6" key={project.id}>
                      <GlowingCards>
                      <GlowingCard glowColor={glow?.color} className="space-y-4">
                      <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div className="card-body">
                            <p className="mb-1">{project.type}</p>
                            <h2 className="card-title mb-3">{project.name}</h2>
                            <p className="card-text">{project.description}</p>
                          </div>
              
                      </Link>
                        </GlowingCard>
                      </GlowingCards>
                    </div>
                  ))}
                  
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