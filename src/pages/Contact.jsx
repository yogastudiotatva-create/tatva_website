import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `
Hello! I'm interested in Tatva Yoga Studio.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interested in: ${formData.service}
Message: ${formData.message}
    `.trim()
    
    const whatsappUrl = `https://wa.me/919000544195?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
    
    setFormStatus('Your inquiry will be sent via WhatsApp. Please complete the message on WhatsApp.')
    
    setTimeout(() => setFormStatus(''), 5000)
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="lead">
            We'd love to hear from you. Reach out with any questions!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="contact-intro">
                Get in touch with us through any of the following channels. 
                We're here to answer your questions and help you start your wellness journey.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h3>Location</h3>
                    <p>Beeramguda, Hyderabad</p>
                    <a 
                      href="https://share.google/YYaCjvoAoYnJw72MT" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <a href="tel:+919000544195">+91 9000544195</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <a href="mailto:info@tatvayoga.com">info@tatvayoga.com</a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a 
                    href="https://www.instagram.com/tatvabeeramguda/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61579329730118" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="https://wa.me/919000544195" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p className="form-description">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="In-studio Yoga">In-studio Yoga Sessions</option>
                    <option value="Online Yoga">Online Yoga Sessions</option>
                    <option value="Diet Plan">Personalized Diet Plan</option>
                    <option value="Combination">Combination Package</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your wellness goals or any questions you have..."
                  ></textarea>
                </div>

                {formStatus && (
                  <div className="form-status">{formStatus}</div>
                )}

                <button type="submit" className="btn btn-primary">
                  Send via WhatsApp
                </button>

                <p className="form-note">
                  * Your message will be sent via WhatsApp for faster response
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.3!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMwJzAwLjAiTiA3OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 'var(--border-radius-lg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tatva Yoga Studio Location"
            ></iframe>
            <p className="map-note">
              <a 
                href="https://share.google/YYaCjvoAoYnJw72MT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Open in Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
