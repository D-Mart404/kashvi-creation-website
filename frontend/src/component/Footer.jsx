import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-16">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-50"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-bold text-white">Kashvi Creation</h2>
            <p className="mt-2 text-gray-400">
              Elevate your elegance with our handpicked collection of premium ethnic wear.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/" className="hover:text-white transition">Shop</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Customer Support</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-white transition">FAQs</a></li>
              <li><a href="/returns" className="hover:text-white transition">Return Policy</a></li>
              <li><a href="/shipping" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-400 text-sm">Subscribe to our newsletter for exclusive offers.</p>
            <div className="flex mt-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 transition text-white rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social & Copyright Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 pb-6">
          {/* Social Icons */}
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-white transition"><FaYoutube size={24} /></a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Kashvi Creation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
