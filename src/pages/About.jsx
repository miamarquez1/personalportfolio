// /Users/miamarquez/my-portfolio/src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div className="container-fluid my-5 px-md-5">
      <h1 className="text-center mb-4">About Me</h1>

      <div className="row">
        <div className="col-lg-8 mx-auto">

          {/* Bio Section */}
          <section className="mb-4">
            <h2>Bio</h2>
            <p>
              Hi! I'm Mia Marquez — a Digital Media major at the University of Central Florida, passionate about user-centered design and front-end development. I'm fluent in both Spanish and English, and I thrive in fast-paced, collaborative environments that embrace feedback and creativity. I'm currently part of multiple design and coding organizations where I expand my UX/UI and web dev skills through hands-on projects.
            </p>
          </section>

          {/* Skills Section - Using Badges */}
          <section className="mb-4">
            <h2>Skills</h2>
            <div className="d-flex flex-wrap gap-2"> {/* Use flexbox for wrapping badges */}
              <span className="badge bg-primary p-2">HTML</span>
              <span className="badge bg-primary p-2">CSS</span>
              <span className="badge bg-primary p-2">JavaScript</span>
              <span className="badge bg-primary p-2">PHP</span>
              <span className="badge bg-secondary p-2">Adobe Photoshop</span>
              <span className="badge bg-secondary p-2">Illustrator</span>
              <span className="badge bg-secondary p-2">Figma</span>
              <span className="badge bg-secondary p-2">Canva</span>
              <span className="badge bg-info text-dark p-2">Visual Studio Code</span>
              <span className="badge bg-info text-dark p-2">GitHub</span>
              <span className="badge bg-success p-2">Microsoft Excel</span>
              <span className="badge bg-success p-2">PowerPoint</span>
              <span className="badge bg-success p-2">Word</span>
              <span className="badge bg-success p-2">Access</span>
              <span className="badge bg-warning text-dark p-2">Bilingual (Spanish/English)</span>
            </div>
          </section>

          {/* Interests Section */}
          <section>
            <h2>Interests</h2>
            <p>
              I'm especially interested in UX/UI design, accessible web development, and using design to tell digital stories. 
              I love working with like-minded peers through clubs like Girls Who Code and Design and Code UCF. Outside of tech, 
              I’m inspired by fashion, creativity, and building inclusive spaces for women in tech.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default About;
