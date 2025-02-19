import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Shreya Joshi",
    role: "Bride",
    review: "Amazing service! The Saree was incredibly beautiful and the results exceeded our expectations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Rajveer Manhotra",
    role: "Groom",
    review: "I highly recommend their Sarees. Beautiful, elegant, and great designs!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Chhavi Goyal",
    role: "Bride",
    review: "Fantastic design from top to bottom. Will definitely buy from them again!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
];

const ReviewsTestimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-center">
      <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
      
      <div className="relative overflow-hidden max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center space-y-4"
          >
            <img 
              src={testimonials[current].image} 
              alt={testimonials[current].name} 
              className="w-16 h-16 rounded-full border-2 border-blue-500"
            />
            <p className="text-gray-700 italic">"{testimonials[current].review}"</p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className={`w-5 h-5 ${index < testimonials[current].rating ? "text-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
            <span className="text-sm text-gray-500">{testimonials[current].role}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Navigation */}
      <div className="mt-6 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${index === current ? "bg-blue-500" : "bg-gray-300"}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ReviewsTestimonials;
