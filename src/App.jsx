// /Users/miamarquez/my-portfolio/src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// Ensure Bootstrap CSS is imported (usually in main.jsx/index.js or here)
import 'bootstrap/dist/css/bootstrap.min.css';
// Import your custom styles AFTER bootstrap
// Make sure this path is correct relative to App.jsx
// If custom.css is in src/assets/styles, the path is './assets/styles/custom.css'
import './assets/styles/custom.css';

function App() {
  return (
    // 1. Make this wrapper div a flex column that takes minimum viewport height
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* 2. Make the <main> element grow to fill available space */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>

      {/* Footer will be pushed to the bottom */}
      <Footer />
    </div>
  );
}

export default App;
