import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Add honeypot field to the initial state
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // To prevent multiple submissions

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value.trim(), // Trim input to avoid leading/trailing spaces
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);
    setStatus('Sending...'); // Update status to indicate sending

    if (formData.honeypot) {
      setStatus('Possible bot detected. Message not sent.');
      setIsSubmitting(false);
      return;
    }

    const serviceId = 'service_7mgsokk'; // Replace with your service ID
    const templateId = 'template_u4rvawk'; // Replace with your template ID
    const publicKey = 'xBUahXeAWgMCp8V1m'; // Replace with your public key

    try {
      await emailjs.send(
        serviceId,
        templateId,
        formData,
        publicKey
      );
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '', honeypot: '' }); // Clear the form
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send the message. Please try again.');
    } finally {
      setIsSubmitting(false); // Allow submissions again
    }
  };

  return (
    <div className="container-fluid my-5 px-md-5">
      <h1 className="text-center mb-4">Get in Touch</h1>
      <div className="row">
        <div className="col-md-8 mx-auto mb-5">
          <h2 className="h4 mb-3 text-center">Reach Out to Me</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ position: 'absolute', left: '-9999px' }}>
              <label htmlFor="honeypot">Don't fill this out:</label>
              <input type="text" id="honeypot" name="honeypot" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {status && (
              <p
                className={`mb-3 text-center ${
                  status.includes('successfully') ? 'text-success' : 'text-danger'
                }`}
              >
                {status}
              </p>
            )}
            <div className="text-center">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        {/* Contact Details & Social Links Column - Add mx-auto */}
        <div className="col-md-8 mx-auto text-center">
          <h2 className="h4 mb-3">Or find me here</h2>
          <p>
            Email:{' '}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <div>
            <a
              href="https://github.com/miamarquez1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark m-1"
            >
              <i className="bi bi-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mia-m-114307293/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary m-1"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
