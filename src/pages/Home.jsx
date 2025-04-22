import React from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used via motion.div below
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../assets/styles/custom.css';

function Home() {
  // Animation variants can make the motion props cleaner
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  return (
    <div className="home-background">
      {/* Use variants for cleaner animation definition */}
      <motion.div
        className="container-fluid text-center py-5"
        variants={containerVariants} 
        initial="hidden"           
        animate="visible"         
      >
        <h1 className="display-4">Hi! I'm Mia Marquez</h1>
        <br />
        <p className="lead">Welcome to my portfolio website. I am a Passionate Software Developer.</p>
        <p>
          I specialize in beautiful user-friendly interfaces. Explore my work and feel free to get in touch!
        </p>
        <Link to="/projects" className="btn btn-primary btn-lg mt-3">View My Work</Link>
      </motion.div>
    </div>
  );
}

export default Home;
