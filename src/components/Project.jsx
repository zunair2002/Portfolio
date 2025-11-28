import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ParticlesBackground from '@/components/lightswind/particles-background';


function Project() {
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
    // {
    //   id: 4,
    //   type: "Final Year Project",
    //   name: "Study Bhai",
    //   description:
    //     "An educational platform for students providing personalized experiences, interactive lessons, and instant doubt clearing through an AI chatbot.",
    // },
  ];

  return (
    <>
     <div style={{ position: "relative", minHeight: "100vh" }}>
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
            <ParticlesBackground
              colors={['#00ffff', '#ff00ff', '#ffaa00']}
              size={3}
              countDesktop={300}
              countTablet={350}
              countMobile={500}
              zIndex={-1}
              height="100%"
            />
          </div>
    <h1 className="fancy-title text-center mt-5">Project Details</h1>
      <div className="container py-5">
        <div className="row justify-content-center g-4">
          {cardProjects.map((project) => (
            <div className="col-lg-5 col-md-6" key={project.id}>
              <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 border-0 rounded-4 p-4 card-css">
                  <div className="card-body">
                    <p className="mb-1">{project.type}</p>
                    <h2 className="card-title mb-3">{project.name}</h2>
                    <p className="card-text">{project.description}</p>
                  </div>
                  <hr></hr>
                </div>
              </Link>
            </div>
          ))}
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Project;