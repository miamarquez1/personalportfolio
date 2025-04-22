// /Users/miamarquez/my-portfolio/src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import '../assets/styles/custom.css';

function Home() {
  return (
    <div className="home-background">
      {/* Wrap the content container with motion.div */}
      <motion.div
        className="container-fluid text-center py-5"
        initial={{ opacity: 0, y: 20 }} // Start invisible and slightly down
        animate={{ opacity: 1, y: 0 }}   // Animate to visible and original position
        transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
      >
        <h1 className="display-4">Hi! I'm Mia Marquez</h1>
        <p className="lead">Welcome to my portfoilio website. I am a Passionate Software Developer.</p>
        <p>
          I specialize in beautiful user-friendly interfaces. Explore my work and feel free to get in touch!
        </p>
        <Link to="./projects" className="btn btn-primary btn-lg mt-3">View My Work</Link>
      </motion.div>
    </div>
  );
}

export default Home;
