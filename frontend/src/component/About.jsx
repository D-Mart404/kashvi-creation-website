import { motion } from "framer-motion";
import card5 from "../assets/card_pics2/card5.png"
import card1 from "../assets/card_pics/card1.png"
import card2 from "../assets/card_pics/card2.png"
import card3 from "../assets/card_pics3/card1.jpg"
export default function About() {
  return (
    <section className="bg-gray-900 text-gray-300 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-800 py-5 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          About <span className="text-gray-400">Kashvi Creation</span>
        </h1>
        <p className="font-Noto Sans Devanagari mt-4 text-2xl text-gray-400 max-w-3xl mx-auto">
            {"\u201C प्रेम और विश्वास का अनोखा संगम  \u201D"}
        </p>
      </div>

      {/* About Content Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-[100%] md:w-[100%] h-[500px] flex">
          
          {/* 1st Image - Left Center */}
          <img 
            src={card3}
            alt="About 1" 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-46 h-58 object-cover rounded-lg" 
          />

          {/* 2nd Image - Center Top */}
          <img 
            src={card1}
            alt="About 2" 
            className="absolute left-1/2 top-0 transform -translate-x-1/2 w-46 h-58 object-cover rounded-lg" 
          />

          {/* 3rd Image - Center Bottom */}
          <img 
            src={card2}
            alt="About 3" 
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-46 h-58 object-cover rounded-lg" 
          />

          {/* 4th Image - Right Center */}
          <img 
            src={card5}
            alt="About 4" 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-46 h-58 object-cover rounded-lg" 
          />
          
        </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Founded in 2021, Kashvi Creation was born from a passion for
              timeless elegance. Our goal is to craft exquisite designs that
              blend tradition with modern sophistication.
            </p>
            <p className="mt-4 text-gray-400">
              We take pride in delivering high-quality, handcrafted fashion
              pieces that make every occasion special.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="p-6 bg-gray-900 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white">Quality First</h3>
              <p className="mt-3 text-gray-400">
                Every piece is carefully crafted with premium materials to ensure
                the best experience.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }} 
              className="p-6 bg-gray-900 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white">Timeless Elegance</h3>
              <p className="mt-3 text-gray-400">
                We combine tradition and innovation to create unique, stylish designs.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }} 
              className="p-6 bg-gray-900 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white">Customer Delight</h3>
              <p className="mt-3 text-gray-400">
                Our customers are at the heart of everything we do. Your
                satisfaction drives us forward.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 text-center">
        <h3 className="text-3xl font-bold text-white">Join Our Journey</h3>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Experience luxury like never before. Explore our latest collections
          and embrace the art of elegance.
        </p>
        <a href="/" className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition">
          Explore Now
        </a>
      </div>
    </section>
  );
}
