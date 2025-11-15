import { FaHeart, FaUsers, FaLeaf, FaStar } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Tatva Yoga Studio</h1>
          <p className="lead">
            Your sanctuary for holistic wellness and mindful living
          </p>
        </div>
      </section>

      {/* Main Content - EDITABLE BY YOU */}
      <section className="about-content section">
        <div className="container">
          <div className="about-intro">
            <h2>Our Story</h2>
            <p>
              {/* EDITABLE: Replace this placeholder text with your studio's story */}
              Welcome to Tatva Yoga Studio, where ancient yoga wisdom meets modern wellness practices. 
              Founded with a vision to make authentic yoga accessible to everyone, we've created a 
              nurturing space where students of all levels can explore the transformative power of yoga.
            </p>
            <p>
              {/* EDITABLE: Add more about your journey, founding, inspiration */}
              Our studio is built on the principles of inclusivity, authenticity, and personal growth. 
              We believe that yoga is not just about physical postures, but a holistic approach to 
              well-being that encompasses body, mind, and spirit.
            </p>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <FaHeart />
                </div>
                <h3>Compassion</h3>
                <p>
                  {/* EDITABLE: Describe your approach to compassionate teaching */}
                  We create a supportive environment where every student feels welcome and valued, 
                  regardless of their experience level or physical ability.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaUsers />
                </div>
                <h3>Community</h3>
                <p>
                  {/* EDITABLE: Describe your community building efforts */}
                  Building a strong, supportive community where students inspire and encourage 
                  each other on their wellness journeys.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaLeaf />
                </div>
                <h3>Authenticity</h3>
                <p>
                  {/* EDITABLE: Describe your commitment to authentic yoga */}
                  We honor the traditional roots of yoga while adapting practices to meet 
                  contemporary needs and lifestyles.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaStar />
                </div>
                <h3>Excellence</h3>
                <p>
                  {/* EDITABLE: Describe your quality standards */}
                  Committed to providing the highest quality instruction and maintaining a 
                  safe, clean, and inspiring practice environment.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mission-section">
            <h2>Our Mission</h2>
            <div className="mission-content">
              <p>
                {/* EDITABLE: Replace with your actual mission statement */}
                At Tatva Yoga Studio, our mission is to empower individuals to achieve optimal 
                health and well-being through the practice of yoga. We strive to create a welcoming 
                space where students can explore mindfulness, build strength, and cultivate inner peace.
              </p>
              <p>
                {/* EDITABLE: Add more about your goals and vision */}
                We are dedicated to making yoga accessible to everyone, offering both in-person and 
                online classes, along with personalized nutrition guidance to support your complete 
                wellness journey.
              </p>
            </div>
          </div>

          {/* Instructors Section */}
          <div className="instructors-section">
            <h2>Meet Our Instructors</h2>
            <p className="section-intro">
              {/* EDITABLE: Add information about your instructors */}
              Our certified yoga instructors bring years of experience and a deep passion for 
              teaching. Each instructor is committed to helping you achieve your personal wellness goals.
            </p>
            
            {/* EDITABLE: Add instructor profiles here */}
            <div className="instructor-note">
              <p>
                <strong>Note to Admin:</strong> Add your instructor profiles, photos, and 
                credentials in this section. You can duplicate the structure below for each instructor.
              </p>
              
              {/* Template for instructor profile - duplicate and edit */}
              <div className="instructor-template">
                <h4>Instructor Name</h4>
                <p><em>Credentials & Specialization</em></p>
                <p>Brief bio and teaching philosophy...</p>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="location-info">
            <h2>Visit Us</h2>
            <p>
              {/* EDITABLE: Add specific address details */}
              We're located in the heart of Beeramguda, providing a peaceful retreat from the 
              hustle and bustle of daily life. Our studio features spacious practice rooms, 
              natural lighting, and all the amenities you need for a comfortable practice.
            </p>
            <p>
              <strong>Address:</strong> Beeramguda, Hyderabad<br />
              <strong>Phone:</strong> +91 9000544195
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>Experience the Tatva difference and start your wellness journey today</p>
          <a href="/contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}

export default About
