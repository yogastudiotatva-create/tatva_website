import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FaUser, FaLaptop, FaAppleAlt, FaCheck, FaClock, FaUsers, FaVideo } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to section if hash is present
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="lead">
            Comprehensive wellness solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-content section">
        <div className="container">
          
          {/* In-studio Sessions */}
          <div id="studio" className="service-detail">
            <div className="service-detail-header">
              <div className="service-detail-icon">
                <FaUser />
              </div>
              <h2>In-studio Yoga Sessions</h2>
            </div>
            
            <div className="service-detail-content">
              <p className="service-description">
                Experience the full benefits of yoga in our beautiful, peaceful studio space. 
                Our in-person classes provide personalized attention, hands-on adjustments, 
                and the energy of practicing alongside a supportive community.
              </p>

              <div className="service-features">
                <h3>What's Included:</h3>
                <ul>
                  <li><FaCheck /> Small group classes for personalized attention</li>
                  <li><FaCheck /> Professional mats and props provided</li>
                  <li><FaCheck /> Hands-on adjustments and modifications</li>
                  <li><FaCheck /> Multiple class timings throughout the week</li>
                  <li><FaCheck /> Beginner to advanced level classes</li>
                  <li><FaCheck /> Clean, air-conditioned studio space</li>
                </ul>
              </div>

              <div className="service-highlights">
                <div className="highlight-card">
                  <FaClock />
                  <h4>Flexible Timings</h4>
                  <p>Morning and evening batches available</p>
                </div>
                <div className="highlight-card">
                  <FaUsers />
                  <h4>Small Groups</h4>
                  <p>Maximum 15 students per class</p>
                </div>
              </div>

              <div className="service-pricing">
                <p className="pricing-note">
                  <strong>Pricing:</strong> Contact us for current packages and membership options
                </p>
              </div>

              <a href="/contact" className="btn btn-primary">Book a Session</a>
            </div>
          </div>

          {/* Online Sessions */}
          <div id="online" className="service-detail featured-service">
            <div className="service-detail-header">
              <div className="service-detail-icon">
                <FaLaptop />
              </div>
              <h2>Online Yoga Sessions</h2>
            </div>
            
            <div className="service-detail-content">
              <p className="service-description">
                Practice from anywhere with our live, interactive online yoga classes. Get the 
                same quality instruction and personal attention from the comfort of your home, 
                office, or while traveling.
              </p>

              <div className="service-features">
                <h3>What's Included:</h3>
                <ul>
                  <li><FaCheck /> Live interactive sessions via video call</li>
                  <li><FaCheck /> Real-time feedback and corrections</li>
                  <li><FaCheck /> Flexible scheduling to fit your lifestyle</li>
                  <li><FaCheck /> Recorded sessions for your reference</li>
                  <li><FaCheck /> One-on-one and group class options</li>
                  <li><FaCheck /> Mobile and desktop compatible</li>
                </ul>
              </div>

              <div className="service-highlights">
                <div className="highlight-card">
                  <FaVideo />
                  <h4>Live Sessions</h4>
                  <p>Interactive classes with real-time guidance</p>
                </div>
                <div className="highlight-card">
                  <FaClock />
                  <h4>Your Schedule</h4>
                  <p>Choose times that work for you</p>
                </div>
              </div>

              <div className="service-pricing">
                <p className="pricing-note">
                  <strong>Pricing:</strong> Flexible packages for individuals and groups
                </p>
              </div>

              <a href="/contact" className="btn btn-secondary">Start Online Classes</a>
            </div>
          </div>

          {/* Diet Plan */}
          <div id="diet" className="service-detail">
            <div className="service-detail-header">
              <div className="service-detail-icon">
                <FaAppleAlt />
              </div>
              <h2>Personalized Diet Plan</h2>
            </div>
            
            <div className="service-detail-content">
              <p className="service-description">
                Complement your yoga practice with customized nutrition guidance. Our personalized 
                diet plans are designed to support your wellness goals, energy levels, and overall 
                health based on your individual needs and lifestyle.
              </p>

              <div className="service-features">
                <h3>What's Included:</h3>
                <ul>
                  <li><FaCheck /> Comprehensive nutritional assessment</li>
                  <li><FaCheck /> Customized meal plans based on your goals</li>
                  <li><FaCheck /> Weekly menu suggestions with recipes</li>
                  <li><FaCheck /> Shopping lists and meal prep guidance</li>
                  <li><FaCheck /> Regular check-ins and plan adjustments</li>
                  <li><FaCheck /> Support via WhatsApp for questions</li>
                </ul>
              </div>

              <div className="diet-benefits">
                <h3>Perfect For:</h3>
                <div className="benefits-list">
                  <span className="benefit-tag">Weight Management</span>
                  <span className="benefit-tag">Energy Optimization</span>
                  <span className="benefit-tag">Athletic Performance</span>
                  <span className="benefit-tag">Digestive Health</span>
                  <span className="benefit-tag">Overall Wellness</span>
                </div>
              </div>

              <div className="service-pricing">
                <p className="pricing-note">
                  <strong>Pricing:</strong> Monthly plans with ongoing support and adjustments
                </p>
              </div>

              <a href="/contact" className="btn btn-outline">Get Your Diet Plan</a>
            </div>
          </div>

        </div>
      </section>

      {/* Combination Packages */}
      <section className="packages-section section">
        <div className="container">
          <h2 className="section-title">Combination Packages</h2>
          <p className="section-subtitle">
            Get the best value by combining multiple services
          </p>

          <div className="packages-grid">
            <div className="package-card">
              <h3>Yoga + Diet Plan</h3>
              <p>Complete wellness package combining yoga sessions with personalized nutrition</p>
              <a href="/contact" className="btn btn-secondary">Learn More</a>
            </div>

            <div className="package-card featured">
              <span className="badge">Popular</span>
              <h3>Studio + Online Hybrid</h3>
              <p>Flexibility to attend both in-person and online classes as per your schedule</p>
              <a href="/contact" className="btn btn-primary">Learn More</a>
            </div>

            <div className="package-card">
              <h3>Complete Wellness</h3>
              <p>All services combined: Studio, Online, and Diet Plan for total transformation</p>
              <a href="/contact" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Start Your Wellness Journey?</h2>
          <p>Contact us to discuss which service or package is right for you</p>
          <a href="/contact" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </section>
    </div>
  )
}

export default Services
