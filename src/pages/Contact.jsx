import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Stack } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
 
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name) {
      newErrors.name = 'Name is required.';
    }
    if (!data.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!data.message) {
      newErrors.message = 'Message is required.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;


    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      honeypot: formData.honeypot
    };


    const validationErrors = validateForm(trimmedData);
    setErrors(validationErrors); // Set errors state

  
    if (trimmedData.honeypot) {
      setStatus('Possible bot detected. Message not sent.');
    }

    if (Object.keys(validationErrors).length > 0 || trimmedData.honeypot) {
        setStatus('Please correct the errors above.'); 
        setIsSubmitting(false); 
        return;
    }


    setIsSubmitting(true);
    setStatus('Sending...');

    const serviceId = 'service_7mgsokk';
    const templateId = 'template_u4rvawk';
    const publicKey = 'xBUahXeAWgMCp8V1m';

    try {
      await emailjs.send(serviceId, templateId, trimmedData, publicKey);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '', honeypot: '' }); 
      setErrors({}); 
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid my-5 px-md-5">
      <h1 className="text-center mb-4">Get in Touch</h1>
      <div className="row">
        <div className="col-md-8 mx-auto mb-5">
          <h2 className="h4 mb-3 text-center">Reach Out to Me</h2>
          <form onSubmit={handleSubmit} noValidate> {/* Add noValidate to disable browser default validation bubbles */}
            {/* Honeypot field */}
            {/* ... honeypot input ... */}

            {/* Name field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                // Add is-invalid class if there's an error for this field
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required // Keep required for accessibility/fallback
              />
              {/* Display error message below the input */}
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Email field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Message field */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            {/* Status message */}
            {status && !Object.keys(errors).length > 0 && ( // Only show general status if no specific errors
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
        <div>
      {/* ... other contact form elements or text ... */}

      
      <Stack direction="horizontal" gap={3} className="justify-content-center fs-2"> {/* Adjust fs-2 for icon size */}
      <h3 className="mt-4">Connect with me:</h3>
        <a
          href="https://github.com/miamarquez1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-dark" // Or your desired link color
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mia-m-114307293/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-dark" // Or your desired link color
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </Stack>

      {/* ... rest of your component ... */}
    </div>

      </div>

    </div>


  );
}

export default Contact;
