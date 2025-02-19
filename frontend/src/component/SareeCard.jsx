import { motion } from "framer-motion";

const SareeCard = ({ saree }) => {
  return (
    <motion.div 
      className="border rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <img src={saree.image} alt={saree.name} className="w-full h-[300px] object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{saree.name}</h2>
        {/* <p className="text-gray-600">₹{saree.price}</p> */}
        <button className="mt-2 px-4 py-2 bg-black text-white rounded-md">View Details</button>
      </div>
    </motion.div>
  );
};

export default SareeCard;
