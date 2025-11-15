import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo/logo.png" alt="Tatva Yoga Studio Logo" />
          <span>Tatva Yoga</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>
            About
          </Link>
          <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>
            Services
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>
            Contact
          </Link>
          
          {/* Social Media Links */}
          <div className="social-links">
            <a 
              href="https://www.instagram.com/tatvabeeramguda/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61579329730118" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://wa.me/919000544195" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-icon whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Header
