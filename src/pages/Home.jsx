import React from 'react';
import '../assets/styles/custom.css'; 

function Home() {
  return (
  
    <div className="home-background">
      <div className="container-fluid text-center py-5"> {/* Removed mt-5 as home-background handles centering */}
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">I'm <b>Mia Marque</b>, a Passionate Software Developer.</p>
        <p>
          I specialize in building modern, responsive web applications. Explore my work and feel free to get in touch!
        </p>
        {/* <Link to="/projects" className="btn btn-primary btn-lg mt-3">View My Work</Link> */}
      </div>
    </div>
  );
}

export default Home;

