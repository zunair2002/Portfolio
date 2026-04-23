import React from "react";
import { useParams } from "react-router-dom";
import ParticlesBackground from '@/components/lightswind/particles-background';

function ProjectDetails() {
  const { id } = useParams();

  // Consistent styles for both top and bottom boxes
  const sectionWrapperStyle = {
    maxWidth: '1000px', // Uniform width for both boxes
    margin: '0 auto',
    width: '100%'
  };
const projectData = {
  "1": {
    name: "SabziMart",
    desc: "I am currently building SabziMart to simplify the grocery delivery experience for customers, riders, and administrators within a secure and unified platform. It focuses on providing a smooth and reliable end-to-end workflow. The system uses MongoDB for efficient data storage and cloud-based image handling for optimized performance. With Redux for centralized state management, the application is structured to be scalable, responsive, and production-ready.",
    tags: ["React", "Next.js", "TypeScript", "Redux", "Node.js", "Express", "Socket.IO", "MongoDB", "NextAuth", "Stripe", "Leaflet Map", "Framer Motion", "RBAC"],
    images: ["/Screenshot 2026-04-23 102633.png", "/Screenshot 2026-04-23 102714.png", "/Screenshot 2026-04-23 102748.png", "/Screenshot 2026-04-23 102841.png","/Screenshot 2026-04-23 103001.png","/Screenshot 2026-04-23 103038.png"]
  },

  "2": {
    name: "Project 1",
    desc: "This project is a real-time chat application built with the MERN stack (MongoDB, Express, React, and Node). It provides a secure user system where all passwords are safely encrypted with bcrypt before being saved in the database. Users first create an account, and after a successful login, the backend gives them a JWT token that allows access to all protected chat features.\n\nOnce logged in, the client connects to the server through Socket.IO, creating a live connection for instant messaging. Users can send and receive messages in real time without refreshing the page, and every message is stored in MongoDB for chat history.",
    tags: ["React", "TailwindCSS", "DaisyUI", "Node.js", "Express", "WebSocket.IO", "REST api's", "MongoDB"],
    images: ["/ch3.png", "/ch2.png", "/ch1.png", "/chat1.png"]
  },

  "3": {
    name: "Project 2",
    desc: "This project is a modern (crypto wallet) user interface designed to display live cryptocurrency data in a clear and visually appealing layout. The dashboard includes a searchable list of popular coins showing key information such as price, market cap, ATH, and daily performance. It also features an interactive Bitcoin price chart that allows users to track market movement over time.\n\nIts clean grid layout, smooth cards, and gradient backgrounds provide a professional look, while the responsive design ensures the interface works well on any device.",
    tags: ["React", "TailwindCSS", "DaisyUI", "Node.js", "Express", "Google Charts", "CoinsAPI", "REST api's"],
    images: ["/a1.png", "/a2.png", "/a3.png", "/a4.png"]
  },

  "4": {
    name: "Project 3",
    desc: "An (expense tracker) is a financial tool designed for the detailed tracking of all your transactions. It provides a structured way to log both income and expenses by capturing key details for each entry. This process creates a complete and organized record of your financial activities.\n\nBeyond simply recording data, this application offers analytical features to guide your financial planning. It transforms your transaction history into useful insights through clear dashboards and visual reports.",
    tags: ["React", "TailwindCSS", "DaisyUI", "Node.js", "JWT", "Express", "REST api's", "MongoDB"],
    images: ["/e1.png", "/e2.png", "/e3.png", "/e4.png"]
  }
};
  const project = projectData[id];

  if (!project) {
    return (
      <div className="container mt-5 text-center">
        <h1 className="text-secondary">Project Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <ParticlesBackground
        colors={["#F28B82", "#FDD663", "#81C995", "#8AB4F8", "#C58AF9"]}
        size={6} countDesktop={80} countTablet={60} countMobile={40} zIndex={-1} height="100vh"
      />
      
      <div className="container mt-5 pb-5">
        <div style={sectionWrapperStyle}>
          
          {/* TOP BOX: Details */}
          <div className="card-css p-lg-5 p-4 mb-5" style={{boxShadow: "0 10px 25px rgba(0,0,0,0.35)"}}>
            <h1 className="text-center mb-4 homepage-name">{project.name}</h1>
            <hr className="mb-4" />
            <p className="mb-4 profile-bio" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              {project.desc}
            </p>
            <div className="d-flex flex-wrap gap-2 mt-4 justify-content-center">
              {project.tags.map(tag => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* HEADING IN BETWEEN */}
          <h2 className="homepage-name text-center mb-4" style={{ fontSize: '1.5rem' }}>Demo Pictures</h2>

          {/* BOTTOM BOX: Images (Same width and padding) */}
          <div className="card-css p-lg-5 p-4 imgs" style={{boxShadow: "0 10px 25px rgba(0,0,0,0.35)"}}>
            {project.images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`demo-${index}`}
                className="img-fluid rounded"
                style={{ width: '100%', objectFit: 'cover' }}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default ProjectDetails;