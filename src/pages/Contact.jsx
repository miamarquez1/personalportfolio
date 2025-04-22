import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Updated handleChange ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Removed .trim() here
    }));
  };

  // --- Updated handleSubmit ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus('Sending...');

    // Trim the data *before* validation or sending
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(), // Keep trimming email just in case
      message: formData.message.trim(),
      honeypot: formData.honeypot // No need to trim honeypot
    };

    // Check honeypot first
    if (trimmedData.honeypot) {
      setStatus('Possible bot detected. Message not sent.');
      setIsSubmitting(false);
      return;
    }

    // Basic validation on trimmed data
    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      setStatus('Please fill out all required fields.');
      setIsSubmitting(false); // Stop submission if validation fails
      return;
    }

    const serviceId = 'service_7mgsokk';
    const templateId = 'template_u4rvawk';
    const publicKey = 'xBUahXeAWgMCp8V1m';

    try {
      await emailjs.send(
        serviceId,
        templateId,
        trimmedData, // Send the trimmed data object
        publicKey
      );
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '', honeypot: '' }); // Clear the form
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- JSX remains the same ---
  return (
    <div className="container-fluid my-5 px-md-5">
      <h1 className="text-center mb-4">Get in Touch</h1>
      <div className="row">
        <div className="col-md-8 mx-auto mb-5">
          <h2 className="h4 mb-3 text-center">Reach Out to Me</h2>
          <form onSubmit={handleSubmit}>
            {/* Honeypot field */}
            <div style={{ position: 'absolute', left: '-9999px' }}>
              <label htmlFor="honeypot">Don't fill this out:</label>
              <input type="text" id="honeypot" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex="-1" autoComplete="off" />
            </div>
            {/* Name field */}
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
            {/* Email field */}
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
            {/* Message field */}
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
            {/* Status message */}
            {status && (
              <p
                className={`mb-3 text-center ${
                  status.includes('successfully') ? 'text-success' : 'text-danger'
                }`}
              >
                {status}
              </p>
            )}
            {/* Submit button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="row">
        <div className="col-md-8 mx-auto text-center">
          <h2 className="h4 mb-3">Or find me here</h2>
          <p>
            Email:{' '}
            {/* --- TODO: Replace with your actual email --- */}
            <a href="mailto:marq0325@gmail.com">marq0325@gmail.com</a>
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
