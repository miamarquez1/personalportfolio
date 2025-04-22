
import React from 'react';
import '../assets/styles/custom.css';

function Home() {
  return (
    // Add a class for potential background image styling
    <div className="home-background">
      <div className="container text-center mt-5 py-5">
        <h1 className="display-4">Welcome to My Portfolio</h1>
        {/* --- TODO: Replace with your actual name and profession --- */}
        <p className="lead">I'm Mia Marquez, a Passionate Software Developer.</p>
        <p>
          I specialize in building modern, responsive web applications. Explore my work and feel free to get in touch!
        </p>
        {/* Optional: Add a call-to-action button */}
        {/* <Link to="/projects" className="btn btn-primary btn-lg mt-3">View My Work</Link> */}
      </div>
    </div>
  );
}

export default Home;
