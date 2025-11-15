import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppWidget.css'

/**
 * WhatsApp Widget Component
 * 
 * AISENSY INTEGRATION INSTRUCTIONS:
 * ================================
 * This component provides a placeholder for AiSensy WhatsApp Business API integration.
 * 
 * To integrate AiSensy:
 * 1. Sign up at https://www.aisensy.com/
 * 2. Get your WhatsApp Business API widget code/script
 * 3. OPTION A - Script Injection:
 *    - Add the AiSensy script to index.html <head> or before </body>
 *    - The widget will auto-initialize
 * 
 * 4. OPTION B - Replace this component:
 *    - Replace the content below with AiSensy's widget code
 *    - Or use their React component if available
 * 
 * 5. OPTION C - Custom Integration:
 *    - Use AiSensy's API to customize the widget
 *    - Replace the WhatsApp link with AiSensy's widget initialization
 * 
 * Current Implementation:
 * - Direct WhatsApp link (works immediately)
 * - Pre-filled message for better UX
 * - Mobile-optimized floating button
 * - Easy to replace with AiSensy widget
 */

const WhatsAppWidget = () => {
  const phoneNumber = '919000544195'
  const message = encodeURIComponent('Hello! I would like to know more about your yoga sessions.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="whatsapp-widget">
      {/* 
        REPLACE THIS SECTION WITH AISENSY WIDGET CODE 
        Keep the className "whatsapp-widget" for consistent styling
      */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">Chat with us</span>
      </a>
      
      {/* Pulse effect for attention */}
      <div className="whatsapp-pulse"></div>
    </div>
  )
}

export default WhatsAppWidget
