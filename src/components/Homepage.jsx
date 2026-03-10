import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ParticlesBackground from "@/components/lightswind/particles-background";
import {
  GlowingCards,
  GlowingCard,
} from "@/components/lightswind/glowing-cards";
import { UserRoundPen, BrainCircuit, Phone, FolderKanban } from "lucide-react";

const Homepage = () => {
  return (
    <>
      <ParticlesBackground
        colors={["#F28B82", "#FDD663", "#81C995", "#8AB4F8", "#C58AF9"]}
        size={6}
        countDesktop={80}
        countTablet={60}
        countMobile={40}
        zIndex={-1}
        height="100%"
      />
      <div className="container-fluid min-vh-100 d-flex flex-column justify-content-between content-container">
        <div className="w-100" style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <div className="d-flex flex-column align-items-center justify-content-center pt-5 pb-4">
            <img
              className="homepage-avatar mb-4"
              src="avatar.png"
              alt="Profile"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid white",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              }}
            />
            <div>
              <h1 className="homepage-name text-center">ZUNAIR SHAHID</h1>
              <p className="homepage-description text-center mt-3">
                Full-Stack Developer | JS, TS | React.js, Next.js | Node.js, Express | MongoDB | UI-UX
              </p>
            </div>
          </div>

          {/* Bottom Center - Cards in a Row */}
          <div className="d-flex justify-content-center align-items-center pb-5">
            <div className="homepage-buttons">
              <GlowingCards>
                <GlowingCard
                  glowColor="#f59e0b"
                  className="space-y-4"
                  style={{ boxShadow: "0 6px 15px rgba(0,0,0,0.25)" }}
                >
                  <Link
                    to="/aboutme"
                    className="d-flex flex-column align-items-center justify-content-center text-center text-decoration-none text-dark"
                  >
                    <UserRoundPen size={30} />
                    <p className="fw-bold pt-3 mb-0">SELF</p>
                  </Link>
                </GlowingCard>

                <GlowingCard
                  glowColor="#C58AF9"
                  className="space-y-4"
                  style={{ boxShadow: "0 6px 15px rgba(0,0,0,0.25)" }}
                >
                  <Link
                    to="/skills"
                    className="d-flex flex-column align-items-center justify-content-center text-center text-decoration-none text-dark"
                  >
                    <BrainCircuit size={30} />
                    <p className="fw-bold pt-3 mb-0">SKILLS</p>
                  </Link>
                </GlowingCard>

                <GlowingCard
                  glowColor="#81C995"
                  className="space-y-4"
                  style={{ boxShadow: "0 6px 15px rgba(0,0,0,0.25)" }}
                >
                  <Link
                    to="/project"
                    className="d-flex flex-column align-items-center justify-content-center text-center text-decoration-none text-dark"
                  >
                    <FolderKanban size={30} />
                    <p className="fw-bold pt-3 mb-0">PROJECTS</p>
                  </Link>
                </GlowingCard>

                <GlowingCard
                  glowColor="#F28B82"
                  className="space-y-4"
                  style={{ boxShadow: "0 6px 15px rgba(0,0,0,0.25)" }}
                >
                  <Link
                    to="/contactme"
                    className="d-flex flex-column align-items-center justify-content-center text-center text-decoration-none text-dark"
                  >
                    <Phone size={30} />
                    <p className="fw-bold pt-3 mb-0">CONTACT</p>
                  </Link>
                </GlowingCard>
              </GlowingCards>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
