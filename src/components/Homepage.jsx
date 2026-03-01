import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import ParticlesBackground from '@/components/lightswind/particles-background';
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards"
import { UserRoundPen,BrainCircuit , Phone, FolderKanban} from "lucide-react";

const Homepage = () => {
  
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
      <div className="container-fluid min-vh-100 d-flex flex-column justify-content-between content-container">
        <div className="w-100" style={{ maxWidth: '1600px', margin: '0 auto' }}>
          {/* Top Center - Avatar with Name and Description */}
          <div className="d-flex flex-column align-items-center justify-content-center pt-5 pb-4">
            <img
              className="homepage-avatar mb-4"
              src="apni.jpg"
              alt="Profile"
            />
            <div>
              <h1 className="homepage-name text-center">ZUNAIR SHAHID</h1>
              <p className="homepage-description text-center">Full Stack Developer | MERN | ROR</p>
            </div>
          </div>

          {/* Bottom Center - Cards in a Row */}
          <div className="d-flex justify-content-center align-items-center pb-5">
            <div className="homepage-buttons">
              <GlowingCards>
                <GlowingCard glowColor="#f59e0b" className="space-y-4">
                  <Link to="/aboutme" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <UserRoundPen size={50} />
                    <p className="fw-bold pt-3 mb-0">SELF</p>
                  </Link>
                </GlowingCard>
                <GlowingCard glowColor="#C58AF9" className="space-y-4">
                  <Link to="/skills" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <BrainCircuit size={50} />
                    <p className="fw-bold pt-3 mb-0">SKILLS</p>
                  </Link>
                </GlowingCard>
                <GlowingCard glowColor="#81C995" className="space-y-4">
                  <Link to="/project" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <FolderKanban size={50} />
                    <p className="fw-bold pt-3 mb-0">PROJECTS</p>
                  </Link>
                </GlowingCard>
                <GlowingCard glowColor="#F28B82" className="space-y-4">
                  <Link to="/contactme" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Phone size={50} />
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