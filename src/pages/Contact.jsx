// /Users/miamarquez/my-portfolio/src/pages/Contact.jsx
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
  // State to hold validation errors
  const [errors, setErrors] = useState({}); // <-- Add error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // --- Enhanced Validation Function ---
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name) {
      newErrors.name = 'Name is required.';
    }
    if (!data.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) { // Simple email format regex
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

    // Trim data first
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      honeypot: formData.honeypot
    };

    // --- Validate before submitting ---
    const validationErrors = validateForm(trimmedData);
    setErrors(validationErrors); // Set errors state

    // Check honeypot
    if (trimmedData.honeypot) {
      setStatus('Possible bot detected. Message not sent.');
      // Don't set isSubmitting to false here, let validation handle it
    }

    // If there are validation errors (or honeypot filled), stop submission
    if (Object.keys(validationErrors).length > 0 || trimmedData.honeypot) {
        setStatus('Please correct the errors above.'); // General error status
        setIsSubmitting(false); // Ensure button is re-enabled if validation fails early
        return;
    }
    // --- End Validation ---


    setIsSubmitting(true);
    setStatus('Sending...');

    const serviceId = 'service_7mgsokk';
    const templateId = 'template_u4rvawk';
    const publicKey = 'xBUahXeAWgMCp8V1m';

    try {
      await emailjs.send(serviceId, templateId, trimmedData, publicKey);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '', honeypot: '' }); // Clear form
      setErrors({}); // Clear errors on success
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
      </div>
      {/* Contact Details Section */}
      {/* ... rest of the component ... */}
    </div>
  );
}

export default Contact;
