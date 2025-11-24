import React from 'react';
import '../App.css';

const Skills = () => {
  return (
    <>
      <div id="skills" className="container-fluid py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fancy-title">Skills & Expertise</h1>
            <p className="lead text-muted">A collection of my technical and professional abilities.</p>
          </div>

          {/* Table with glass effect */}
          <div className="skill-card p-4 mb-5">
            <h4 className="mb-4">
              <i className="bi bi-patch-check-fill me-3"></i>
              Certificates
            </h4>
            <hr />
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th scope="col">Certificate</th>
                    <th scope="col">Start</th>
                    <th scope="col">End</th>
                    <th scope="col">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <img className="certificate" src='devops certificate.jpg' alt="DevOps Certificate" />
                    </th>
                    <td>03-09-2024</td>
                    <td>15-10-2024</td>
                    <td><a href="https://www.linkedin.com/in/zunair-shahid-1ab94327a/" className="linkk" target="_blank" rel="noopener noreferrer">(DEVOPS)</a></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img className="certificate" src='FS certificate.png' alt="Certificate" />
                    </th>
                    <td>16-04-2022</td>
                    <td>07-07-2022</td>
                    <td><a href="https://www.linkedin.com/in/zunair-shahid-1ab94327a/" className="linkk" target="_blank" rel="noopener noreferrer">(MERN)</a></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img className="certificate" src='figma certificate.png' alt="Certificate" />
                    </th>
                    <td>12-04-2023</td>
                    <td>15-05-2023</td>
                    <td><a href="https://www.linkedin.com/in/zunair-shahid-1ab94327a/" className="linkk" target="_blank" rel="noopener noreferrer">(UI-UX)</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-6">
              <div className="skill-card h-100 p-4">
                <h4 className="mb-4">
                  <i className="bi bi-code-slash me-3"></i>
                  Frontend Development
                </h4>
                <hr />
                <div className="d-flex flex-wrap gap-2">
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">jQuery</span>
                  <span className="skill-tag">Bootstrap</span>
                  <span className="skill-tag">Tailwind CSS</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">DaisyUI</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill-card h-100 p-4">
                <h4 className="mb-4">
                  <i className="bi bi-server me-3"></i>
                  Backend Development
                </h4>
                <hr />
                <div className="d-flex flex-wrap gap-2">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">PHP</span>
                  <span className="skill-tag">Laravel</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Git Lab</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">Docker</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill-card h-100 p-4">
                <h4 className="mb-4">
                  <i className="bi bi-database-fill-gear me-3"></i>
                  Database Management
                </h4>
                <hr />
                <div className="d-flex flex-wrap gap-2">
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill-card h-100 p-4">
                <h4 className="mb-4">
                  <i className="bi bi-people-fill me-3"></i>
                  Professional Skills
                </h4>
                <hr />
                <div className="d-flex flex-wrap gap-2">
                  <span className="skill-tag">Communication</span>
                  <span className="skill-tag">Leadership</span>
                  <span className="skill-tag">Problem-Solving</span>
                  <span className="skill-tag">Adaptability</span>
                  <span className="skill-tag">Teamwork</span>
                  <span className="skill-tag">Creativity</span>
                  <span className="skill-tag">Focus</span>
                  <span className="skill-tag">Learning Agility</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;