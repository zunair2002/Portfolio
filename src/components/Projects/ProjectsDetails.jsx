import React from "react";
import { useParams } from "react-router-dom";
import ParticlesBackground from '@/components/lightswind/particles-background';


function ProjectDetails() {
  const { id } = useParams(); 

  let content;

  if (id === "1") {
    content = (
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
      <div className="container mt-5">
        <div className="px-4 card-css mb-4 py-3">
        <h1 className="fancy-title mt-5 text-center">Project 1</h1>
        <hr></hr>
        <p>
          
  This project is a real-time chat application built with the MERN stack (MongoDB, Express, React, and Node). It provides a secure user system where all passwords are safely encrypted with bcrypt before being saved in the database. Users first create an account, and after a successful login, the backend gives them a JWT token that allows access to all protected chat features.

<br /><br />

Once logged in, the client connects to the server through Socket.IO, creating a live connection for instant messaging. Users can send and receive messages in real time without refreshing the page, and every message is stored in MongoDB for chat history. The application also includes useful features like online/offline status, typing indicators, and support for private or group chats, all wrapped in a clean, responsive, and modern UI experience.
</p>
<div className="d-flex flex-wrap gap-2">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TailwindCSS</span>
                  <span className="skill-tag">DaisyUI</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">WebSocket.IO</span>
                  <span className="skill-tag">REST api's</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
</div>
<p className="text-bold fw-5 fs-1 fancy-title text-center">Demo Pictures</p>
<div className="card-css imgs">
        <img
    src="/ch3.png" 
    alt="pic"
    className="img-fluid rounded mb-3"
  />
        <img
          src="/ch2.png"
          alt="pic"
          className="img-fluid rounded mb-3"
        />
        <img
          src="/ch1.png"
          alt="pic"
          className="img-fluid rounded"
        />
        <img
          src="/chat1.png"
          alt="pic"
          className="img-fluid rounded"
        />
        </div>
      </div>
      </div>
    );
  } else if (id === "2") {
    content = (
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
        <div className="container mt-5">
        <div className="px-4 card-css mb-4 py-3">
        <h1 className="fancy-title mt-5 text-center">Project 2</h1>
        <hr></hr>
        <p>
          
This project is a modern <strong>(crypto wallet)</strong> user interface designed to display live cryptocurrency data in a clear and visually appealing layout. The dashboard includes a searchable list of popular coins showing key information such as price, market cap, ATH, and daily performance. It also features an interactive Bitcoin price chart that allows users to track market movement over time.
<br /><br />

The dashboard also includes sections like a blog preview and an informational area to make the experience more engaging and informative. Its clean grid layout, smooth cards, and gradient backgrounds provide a professional look, while the responsive design and smooth animations ensure the interface works well on any device and feels intuitive to use.
</p>
<div className="d-flex flex-wrap gap-2">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TailwindCSS</span>
                  <span className="skill-tag">DaisyUI</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">Google Charts</span>
                  <span className="skill-tag">CoinsAPI</span>
                  <span className="skill-tag">REST api's</span>
                </div>
</div>
<p className="text-bold fw-5 fs-1 fancy-title text-center">Demo Pictures</p>
<div className="card-css imgs">
        <img
    src="/a1.png" 
    alt="pic"
    className="img-fluid rounded mb-3"
  />
        <img
          src="/a2.png"
          alt="pic"
          className="img-fluid rounded mb-3"
        />
        <img
          src="/a3.png"
          alt="pic"
          className="img-fluid rounded mb-3"
        />
        <img
          src="/a4.png"
          alt="pic"
          className="img-fluid rounded mb-3"
        />
        </div>
      </div>
      </div>
    );
  } else if (id === "3") {
    content = (
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
    <div className="container mt-5">
        <div className="px-4 card-css mb-4 py-3">
        <h1 className="fancy-title mt-5 text-center">Project 3</h1>
        <hr></hr>
        <p>
          
An <strong>(expense tracker)</strong> is a financial tool designed for the detailed tracking of all your transactions. It provides a structured way to log both income and expenses by capturing key details for each entry. This process creates a complete and organized record of your financial activities, allowing for effective financial management and review.
<br /><br />
Beyond simply recording data, this application offers analytical features to guide your financial planning. It transforms your transaction history into useful insights through clear dashboards and visual reports. These tools effectively show your spending patterns and the balance between income and expenses, helping you make informed, fact-based decisions about your budget.
</p>
<div className="d-flex flex-wrap gap-2">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TailwindCSS</span>
                  <span className="skill-tag">DaisyUI</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">JWT</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">REST api's</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
</div>
<p className="text-bold fw-5 fs-1 fancy-title text-center">Demo Pictures</p>
<div className="card-css imgs">
        <img
    src="/e1.png" 
    alt="pic"
    className="img-fluid rounded mb-3"
  />
        <img
          src="/e2.png"
          alt="pic"
          className="img-fluid rounded mb-3"
        />
        <img
          src="/e3.png"
          alt="pic"
          className="img-fluid rounded mb-3"
        />
        <img
          src="/e4.png"
          alt="pic"
          className="img-fluid rounded mb-3"
        />
        </div>
      </div>
      </div>
    );
  } else if (id === "4") {
    content = (
      <div className="container mt-5">
        <div className="px-4 card-css mb-4 py-3">
        <h1 className="fancy-title mt-5 text-center">Project 4</h1>
        <hr></hr>
        <p>
          
  This project is a real-time chat application built with the MERN stack (MongoDB, Express, React, and Node). It provides a secure user system where all passwords are safely encrypted with bcrypt before being saved in the database. Users first create an account, and after a successful login, the backend gives them a JWT token that allows access to all protected chat features.

<br /><br />

Once logged in, the client connects to the server through Socket.IO, creating a live connection for instant messaging. Users can send and receive messages in real time without refreshing the page, and every message is stored in MongoDB for chat history. The application also includes useful features like online/offline status, typing indicators, and support for private or group chats, all wrapped in a clean, responsive, and modern UI experience.
</p>
<div className="d-flex flex-wrap gap-2">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TailwindCSS</span>
                  <span className="skill-tag">DaisyUI</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">WebSocket.IO</span>
                  <span className="skill-tag">REST api's</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
</div>
<p className="text-bold fw-5 fs-1 fancy-title text-center">Demo Pictures</p>
<div className="card-css imgs">
        <img
    src="/c5.jpg" 
    alt="pic"
    className="img-fluid rounded mb-3"
  />
        <img
          src="/c2.png"
          alt="pic"
          className="img-fluid rounded mb-3"
        />
        <img
          src="/c1.png"
          alt="pic"
          className="img-fluid rounded mb-3"
        />
        <img
          src="/c1.png"
          alt="pic"
          className="img-fluid rounded mb-3"
        />
        </div>
      </div>
    );
  } else {
    content = (
      <div className="container mt-5">
        <h1 className="text-secondary">Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default ProjectDetails;