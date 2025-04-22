// /Users/miamarquez/my-portfolio/src/pages/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => { /* ... */ };
  const handleSubmit = (e) => { /* ... */ };

  return (
    // Keep container-fluid for full width background/padding area
    <div className="container-fluid my-5 px-md-5">
      <h1 className="text-center mb-4">Contact Me</h1>
      <div className="row">
        {/* Contact Form Column - Add mx-auto */}
        <div className="col-md-8 mx-auto mb-5">
          <h2 className="h4 mb-3 text-center">Send me a message</h2> {/* Optional: center heading */}
          <form onSubmit={handleSubmit}>
            {/* ... form fields ... */}
             <div className="mb-3">
               <label htmlFor="name" className="form-label">Name</label>
               <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
             </div>
             <div className="mb-3">
               <label htmlFor="email" className="form-label">Email address</label>
               <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
             </div>
             <div className="mb-3">
               <label htmlFor="message" className="form-label">Message</label>
               <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
             </div>
             {status && <p className={`mb-3 text-center ${status.includes('successfully') ? 'text-success' : 'text-danger'}`}>{status}</p>} {/* Optional: center status */}
             <div className="text-center"> {/* Center the button */}
                <button type="submit" className="btn btn-primary">Send Message</button>
             </div>
          </form>
        </div>
      </div>

      <div className="row">
        {/* Contact Details & Social Links Column - Add mx-auto */}
        <div className="col-md-8 mx-auto text-center">
           <h2 className="h4 mb-3">Or find me here</h2>
           <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
           <div>
             <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark m-1">
               <i className="bi bi-github"></i> GitHub
             </a>
             <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary m-1">
               <i className="bi bi-linkedin"></i> LinkedIn
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
