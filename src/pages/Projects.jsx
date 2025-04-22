function Projects() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {/* Project 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Todo App</h5>
              <p className="card-text">A simple task-tracking app built with React Native and Expo.</p>
              <a href="https://github.com/yourusername/todo-app" target="_blank" className="btn btn-primary">View on GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Exercise Tracker</h5>
              <p className="card-text">An app that lets users log workouts, reps, and durations.</p>
              <a href="https://github.com/yourusername/exercise-tracker" target="_blank" className="btn btn-primary">View on GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">This website! Built with React, Bootstrap, and React Router.</p>
              <a href="https://github.com/yourusername/portfolio-site" target="_blank" className="btn btn-primary">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
