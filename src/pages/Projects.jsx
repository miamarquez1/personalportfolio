import React from 'react';

import todoAppImage from '../assets/img/todo_app_image.png';
import exerciseAppImage from '../assets/img/Exercise_App_image.png';
import beautyTechImage from '../assets/img/Beauty_Tech_Image.png';

function Projects() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {/* Project 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            
            <img
              src={todoAppImage}
              className="card-img-top project-card-img" 
              alt="Todo App project screenshot"
            />
            <div className="card-body d-flex flex-column"> {}
              <h5 className="card-title">Todo App</h5>
              <p className="card-text">A simple task-tracking app built with React Native and Expo.</p>
              {}
              <a href="https://miamarquez1.github.io/todo-app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={exerciseAppImage}
              className="card-img-top project-card-img" 
              alt="Exercise Tracker project screenshot"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Exercise Tracker</h5>
              <p className="card-text">An app that lets users log workouts, reps, and durations.</p>
             
              <a href="https://miamarquez1.github.io/react-exercise-app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            
            <img
              src={beautyTechImage}
              className="card-img-top project-card-img" 
              alt="BeautyTech App prototype screenshot"
            />
            <div className="card-body d-flex flex-column"> 
              <h5 className="card-title">BeautyTech App Prototype</h5>
              <p className="card-text">Booking Service Interactive Prototype.</p>
              
              <a href="https://www.figma.com/proto/Ctc4rN6ovDPvAmJ51WoZpY/BeautyTech-High-Fidelity-Design?node-id=29-228&starting-point-node-id=29%3A228" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                View on Figma
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
