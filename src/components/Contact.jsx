import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <>
   <div class="card-container">

        <div class="card glass-card">
          <div class="card-body">
            
            <div class="info-header d-flex justify-content-between align-items-center mb-2">
              <div class="email">zunairshahid@gmail.com<i class="fas fa-chevron-right ms-1 icon"></i></div>
              <span class="name">Zunair Shahid</span>
            </div>

            <div class="extra-details">
                <p><i class="fas fa-briefcase mb-1"></i> Full-Stack (MERN) Developer | Web Designer (UI-UX)</p>
                <p><i class="bi bi-telephone-fill mb-1"></i> +92 3314774138</p>
                <p><i class="fas fa-map-marker-alt mb-1"></i> Lahore, Pakistan</p>
            </div>

            <hr/>

            <div class="social-grid mt-4">
              <div class="social-item">
                <div class="icon"><i class="fab fa-linkedin linkedin-icon"></i></div>
                <a href="https://www.linkedin.com/in/zunair-shahid-1ab94327a/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
              
              <div class="social-item">
                <div class="icon"><i class="fab fa-instagram instagram-icon"></i></div>
                <a href="https://www.instagram.com/zunair2003/" target="_blank" rel="noreferrer">Instagram</a>
              </div>
              
              <div class="social-item">
                <div class="icon"><i class="fab fa-github github-icon"></i></div>
                <a href="https://github.com/zunair2002/" target="_blank" rel="noreferrer">GitHub</a>
              </div>

            </div>

          </div>
        </div>

    </div>
    
    </>
  )
}

export default Contact
