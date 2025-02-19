import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:dmartolia225@gmail.com?subject=Contact%20Form%20Message&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0A%0A${encodeURIComponent(formData.message)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="bg-white p-6 shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid black",
                borderRadius: "8px",
                outline: "none",
              }}
              className="focus:ring-2 focus:ring-blue-500"
              required
            />

            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        
        {/* Contact Info & Map */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">Feel free to contact us via phone, email, or visit our office.</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-600" />
              <span>123 Business Street, City, Country</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-600" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600" />
              <span>contact@company.com</span>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-blue-600 hover:text-blue-800 transition"><Facebook /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition"><Twitter /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition"><Instagram /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition"><Linkedin /></a>
          </div>

          {/* Embedded Map */}
          <div className="mt-6">
            <iframe 
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509731!2d144.95565131558726!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779ea2df27a1a2!2s123%20Business%20Street%2C%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1632331234567"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </motion.div>
        
      </div>
      
    </section>
  );
};

export default ContactUs;
