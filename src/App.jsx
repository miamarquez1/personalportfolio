// /Users/miamarquez/my-portfolio/src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// Import Bootstrap CSS globally (usually done in main.jsx/index.js or here)
import 'bootstrap/dist/css/bootstrap.min.css';
// Import your custom styles AFTER bootstrap
import './assets/styles/custom.css'; // Make sure path is correct relative to App.jsx

function App() {
  return (
    // Use d-flex flex-column min-vh-100 to ensure footer sticks to bottom
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* Main content area - should not have width restrictions here */}
      <main className="flex-grow-1"> {/* flex-grow-1 helps push footer down */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
