import { Link } from 'react-router-dom'
import { FaUser, FaLaptop, FaAppleAlt, FaArrowRight } from 'react-icons/fa'
import ImageGallery from '../components/ImageGallery'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Life Through Yoga
          </h1>
          <p className="hero-subtitle">
            Experience the perfect blend of ancient wisdom and modern wellness at Tatva Yoga Studio
          </p>
          <div className="hero-buttons">
            <Link to="/services#studio" className="btn btn-primary">
              <FaUser />
              In-studio Sessions
            </Link>
            <Link to="/services#online" className="btn btn-secondary">
              <FaLaptop />
              Online Sessions
            </Link>
            <Link to="/services#diet" className="btn btn-outline">
              <FaAppleAlt />
              Diet Plans
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-circle"></div>
        </div>
      </section>

      {/* Main Service Cards */}
      <section className="services-preview section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Choose the perfect path for your wellness journey</p>
          
          <div className="service-cards">
            <div className="service-card">
              <div className="service-icon">
                <FaUser />
              </div>
              <h3>In-studio Yoga Sessions</h3>
              <p>
                Join our peaceful studio space for guided yoga sessions. Experience personalized 
                attention in a supportive environment designed for all levels.
              </p>
              <Link to="/services#studio" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div className="service-card featured">
              <div className="service-icon">
                <FaLaptop />
              </div>
              <h3>Online Yoga Sessions</h3>
              <p>
                Practice from anywhere with live interactive sessions. Get the same quality 
                instruction from the comfort of your home with flexible scheduling.
              </p>
              <Link to="/services#online" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaAppleAlt />
              </div>
              <h3>Personalized Diet Plan</h3>
              <p>
                Complement your practice with customized nutrition guidance. Tailored meal plans 
                designed to support your wellness goals and lifestyle.
              </p>
              <Link to="/services#diet" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="gallery-section section">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">A glimpse into our yoga community</p>
          <ImageGallery />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section">
        <div className="container">
          <h2 className="section-title">Why Choose Tatva Yoga?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Expert Instructors</h4>
              <p>Learn from certified professionals with years of experience</p>
            </div>
            <div className="benefit-item">
              <h4>Flexible Options</h4>
              <p>Choose between in-studio, online, or hybrid sessions</p>
            </div>
            <div className="benefit-item">
              <h4>All Levels Welcome</h4>
              <p>From beginners to advanced practitioners</p>
            </div>
            <div className="benefit-item">
              <h4>Holistic Approach</h4>
              <p>Yoga combined with nutrition for complete wellness</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Join our community and discover the transformative power of yoga</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
