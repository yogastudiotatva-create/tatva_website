import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Business Info */}
        <div className="footer-section">
          <h3>Tatva Yoga Studio</h3>
          <p className="footer-description">
            Your journey to wellness begins here. Experience professional yoga instruction, 
            personalized guidance, and a supportive community.
          </p>
          <div className="footer-social">
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

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services#studio">In-studio Yoga Sessions</Link></li>
            <li><Link to="/services#online">Online Yoga Sessions</Link></li>
            <li><Link to="/services#diet">Personalized Diet Plan</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt />
              <span>Beeramguda, Hyderabad</span>
            </p>
            <p>
              <FaPhone />
              <a href="tel:+919000544195">+91 9000544195</a>
            </p>
            <p>
              <FaEnvelope />
              <a href="mailto:info@tatvayoga.com">info@tatvayoga.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tatva Yoga Studio. All rights reserved.</p>
        <p className="aisensy-note">
          🔧 <strong>Admin Note:</strong> WhatsApp Business API widget placement - See <code>WhatsAppWidget.jsx</code> for AiSensy integration
        </p>
      </div>
    </footer>
  )
}

export default Footer
