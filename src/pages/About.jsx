// /Users/miamarquez/my-portfolio/src/pages/About.jsx
import React from 'react';

function About() {
  return (
    // Keep container-fluid for full width background/padding area
    <div className="container-fluid my-5 px-md-5">
      <h1 className="text-center mb-4">About Me</h1>

      <div className="row">
        {/* Add mx-auto to center this column within the row */}
        <div className="col-lg-8 mx-auto">
          {/* --- Your Bio, Skills, Interests sections go here --- */}
          <section className="mb-4">
            <h2>Bio</h2>
            <p>
              Hello! I'm Mia Marquez...
            </p>
          </section>

          <section className="mb-4">
            <h2>Skills</h2>
            {/* ... skills list ... */}
          </section>

          <section>
            <h2>Interests</h2>
            {/* ... interests paragraph ... */}
          </section>
          {/* --- End of sections --- */}
        </div>
      </div>
    </div>
  );
}

export default About;
