import { motion } from "framer-motion";

import card1 from "../assets/card_pics/card1.png"
import card2 from "../assets/card_pics2/card5.png"
import card3 from "../assets/card_pics3/card1.jpg"
const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-100">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-900 opacity-40"></div>

      {/* Image Layout */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-full max-w-5xl h-[500px]">
          {/* First Image (Left Middle) */}
          <motion.img
            src={card1}
            alt="Saree 1"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 rounded-lg shadow-lg brightness-75"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Second Image (Center-Top) */}
          <motion.img
            src={card2}
            alt="Saree 2"
            className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1/3 rounded-lg shadow-lg brightness-75"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Third Image (Right Middle) */}
          <motion.img
            src={card3}
            alt="Saree 3"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 rounded-lg shadow-lg brightness-75"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>
      </div>

      {/* Glassmorphism Text Box */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/30 backdrop-blur-md rounded-lg p-8 shadow-lg"
        >
          <h1 className="text-5xl font-Noto Sans Devanagari md:text-6xl font-extrabold text-white drop-shadow-lg">
          प्रेम और विश्वास का अनोखा संगम
          </h1>
          <p className="mt-4 text-lg text-gray-100 drop-shadow-lg">
            Handcrafted Sarees with exquisite designs, perfect for every occasion.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-white text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
      <hr/>
    </section>
  );
};

export default Hero;
