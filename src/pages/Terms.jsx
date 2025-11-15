import './Terms.css'

const Terms = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <h1>Terms and Conditions</h1>
          <p className="lead">Last updated: November 15, 2025</p>
        </div>
      </section>

      {/* Terms Content - FULLY EDITABLE */}
      <section className="terms-content section">
        <div className="container">
          <div className="terms-container">
            
            {/* Admin Notice */}
            <div className="admin-notice">
              <h3>📝 Admin Note</h3>
              <p>
                This is a placeholder Terms and Conditions page. Please replace all content 
                below with your actual terms and conditions. Consult with a legal professional 
                to ensure your terms are comprehensive and legally binding.
              </p>
            </div>

            {/* Introduction */}
            <div className="terms-section">
              <h2>1. Introduction</h2>
              <p>
                {/* EDITABLE: Replace with your introduction */}
                Welcome to Tatva Yoga Studio. These Terms and Conditions govern your use of 
                our website and services. By accessing or using our services, you agree to be 
                bound by these terms.
              </p>
              <p>
                {/* EDITABLE: Add more details */}
                Please read these terms carefully before using our services. If you do not 
                agree with any part of these terms, you should not use our services.
              </p>
            </div>

            {/* Services */}
            <div className="terms-section">
              <h2>2. Services</h2>
              <p>
                {/* EDITABLE: Describe your services */}
                Tatva Yoga Studio provides yoga instruction services including:
              </p>
              <ul>
                <li>In-studio yoga sessions</li>
                <li>Online yoga sessions</li>
                <li>Personalized diet planning</li>
              </ul>
              <p>
                {/* EDITABLE: Add service-specific terms */}
                We reserve the right to modify, suspend, or discontinue any service at any 
                time without notice.
              </p>
            </div>

            {/* Registration and Accounts */}
            <div className="terms-section">
              <h2>3. Registration and Accounts</h2>
              <p>
                {/* EDITABLE: Add your registration policies */}
                To use certain services, you may be required to register and provide accurate 
                information. You are responsible for maintaining the confidentiality of your 
                account credentials.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="terms-section">
              <h2>4. Payment and Fees</h2>
              <p>
                {/* EDITABLE: Add your payment terms */}
                Payment is required in advance for all services. We accept various payment 
                methods as communicated at the time of booking.
              </p>
              <ul>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Prices are subject to change with notice</li>
                <li>Late payment may result in service suspension</li>
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div className="terms-section">
              <h2>5. Cancellation and Refund Policy</h2>
              <p>
                {/* EDITABLE: Add your specific cancellation policy */}
                Cancellations must be made at least 24 hours in advance. Specific refund 
                policies vary by service type.
              </p>
              <ul>
                <li>In-studio sessions: [Add your policy]</li>
                <li>Online sessions: [Add your policy]</li>
                <li>Diet plans: [Add your policy]</li>
              </ul>
            </div>

            {/* Health and Safety */}
            <div className="terms-section">
              <h2>6. Health and Safety</h2>
              <p>
                {/* EDITABLE: Add health disclaimer and safety policies */}
                Yoga practice involves physical activity. You should consult with a physician 
                before beginning any exercise program. By participating in our classes, you 
                acknowledge that:
              </p>
              <ul>
                <li>You are in good physical condition</li>
                <li>You do not have any medical conditions that would prevent safe participation</li>
                <li>You will inform instructors of any health concerns</li>
                <li>You participate at your own risk</li>
              </ul>
            </div>

            {/* Liability */}
            <div className="terms-section">
              <h2>7. Limitation of Liability</h2>
              <p>
                {/* EDITABLE: Add liability terms - consult legal professional */}
                Tatva Yoga Studio and its instructors are not liable for any injuries, 
                accidents, or damages that may occur during or as a result of participation 
                in yoga classes or following diet recommendations.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="terms-section">
              <h2>8. Intellectual Property</h2>
              <p>
                {/* EDITABLE: Add IP protection terms */}
                All content on this website, including text, graphics, logos, and images, 
                is the property of Tatva Yoga Studio and protected by copyright laws.
              </p>
            </div>

            {/* Privacy */}
            <div className="terms-section">
              <h2>9. Privacy</h2>
              <p>
                {/* EDITABLE: Reference your privacy policy */}
                Your privacy is important to us. We collect and use personal information 
                in accordance with our Privacy Policy. By using our services, you consent 
                to our data practices.
              </p>
            </div>

            {/* Code of Conduct */}
            <div className="terms-section">
              <h2>10. Code of Conduct</h2>
              <p>
                {/* EDITABLE: Add behavioral expectations */}
                All participants are expected to:
              </p>
              <ul>
                <li>Respect instructors and fellow students</li>
                <li>Arrive on time for classes</li>
                <li>Maintain cleanliness and hygiene</li>
                <li>Follow studio policies and instructor guidance</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="terms-section">
              <h2>11. Termination</h2>
              <p>
                {/* EDITABLE: Add termination terms */}
                We reserve the right to terminate or suspend access to our services 
                for violation of these terms or any inappropriate behavior.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="terms-section">
              <h2>12. Changes to Terms</h2>
              <p>
                {/* EDITABLE: Add update policy */}
                We may update these Terms and Conditions from time to time. Continued use 
                of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            {/* Contact */}
            <div className="terms-section">
              <h2>13. Contact Information</h2>
              <p>
                {/* EDITABLE: Add contact details */}
                If you have questions about these Terms and Conditions, please contact us:
              </p>
              <ul>
                <li>Email: info@tatvayoga.com</li>
                <li>Phone: +91 9000544195</li>
                <li>Address: Beeramguda, Hyderabad</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="terms-section">
              <h2>14. Governing Law</h2>
              <p>
                {/* EDITABLE: Add jurisdiction - consult legal professional */}
                These Terms and Conditions are governed by the laws of India. Any disputes 
                shall be subject to the exclusive jurisdiction of the courts in Hyderabad.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
