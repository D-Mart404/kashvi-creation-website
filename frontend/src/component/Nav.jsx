import { Menu, X, ChevronDown, ShoppingCart, Search, User } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";
const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;  

};

const user = getUser();
const searchItems = [
  { name: "Silk Sarees", link: "/category/silk-sarees" },
  { name: "Cotton Sarees", link: "/category/cotton-sarees" },
  { name: "Banarasi Sarees", link: "/category/banarasi-sarees" },
  { name: "Kanjeevaram Sarees", link: "/category/kanjeevaram-sarees" },
  { name: "Chiffon Sarees", link: "/category/chiffon-sarees" },
  { name: "Georgette Sarees", link: "/category/georgette-sarees" },
  { name: "Designer Sarees", link: "/category/designer-sarees" },
  { name: "Bridal Sarees", link: "/category/bridal-sarees" },
  { name: "Part Wear Sarees", link: "/category/party-wear-sarees" },
  { name: "Wedding Collection", link: "/collections/wedding-collection" },
  { name: "Festive Collection", link: "/collections/festive-collection" },
  { name: "Daily Wear Collection", link: "/collections/daily-wear-collection" },
  { name: "Office Wear Collection", link: "/collections/office-wear-collection" },
  { name: "New Arrivals", link: "/new-arrivals" },
  { name: "Best Sellers", link: "/best-sellers" },
  { name: "Offers & Discounts", link: "/offers" },
  { name: "Login", link: "/login" },
  { name: "Cart", link: "/cart" },
  { name: "About", link: "/about" },
  { name: "Profile", link: "/profile" },
  { name: "Contact", link: "/contact" },
  { name: "Blog", link: "/blog" },
];


const fuse = new Fuse(searchItems, {
  keys: ["name"],
  threshold: 0.3, // Controls fuzzy matching (0: exact match, 1: very loose)
});

// Navigation links component with dropdowns
const NavLinks = ({ isMobile }) => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  return (
    <ul className={`flex flex-col lg:flex-row lg:gap-6 text-base ${isMobile ? "text-white" : "text-black"}`}>
      
      <li className="relative">
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex items-center gap-1 hover:text-gray-300 transition"
        >
          Categories <ChevronDown size={16} />
        </button>
        <AnimatePresence>
          {categoryOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-md overflow-hidden"
            >
              {[
                "Silk Sarees", "Cotton Sarees", "Banarasi Sarees",
                "Kanjeevaram Sarees", "Chiffon Sarees", "Georgette Sarees",
                "Designer Sarees", "Party Wear Sarees", "Bridal Sarees"
              ].map((category) => (
                <li key={category}>
                  <a
                    href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
      <li className="relative">
        <button
          onClick={() => setCollectionsOpen(!collectionsOpen)}
          className="flex items-center gap-1 hover:text-gray-300 transition"
        >
          Collections <ChevronDown size={16} />
        </button>
        <AnimatePresence>
          {collectionsOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-md overflow-hidden"
            >
              {[
                "Wedding Collection", "Festive Collection",
                "Daily Wear Collection", "Office Wear Collection"
              ].map((collection) => (
                <li key={collection}>
                  <a
                    href={`/collections/${collection.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    {collection}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
      <li><a href="/new-arrivals" className="hover:text-gray-300 transition">New Arrivals</a></li>
      <li><a href="/best-sellers" className="hover:text-gray-300 transition">Best Sellers</a></li>
      <li><a href="/offers" className="hover:text-gray-300 transition">Offers & Discounts</a></li>
      <li><a href="/about" className="hover:text-gray-300 transition">About Us</a></li>
      <li><a href="/contact" className="hover:text-gray-300 transition">Contact Us</a></li>
      <li><a href="/blog" className="hover:text-gray-300 transition">Blog</a></li>
      
    </ul>
  );
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setSearchResults] = useState([]); // ✅ Fix: Declare results properly
  const navigate = useNavigate();

const handleItemClick = (link) => {
  navigate(link);
  setSearchOpen(false); // Close search results after clicking
};

  // Handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      const results = fuse.search(query);
      setSearchResults(results.map((result) => result.item));
    }
  };

  return (
    <>
      {/* Desktop Navigation Wrapper */}
      <div className="flex items-center justify-between w-full">
        {/* Centered Navigation Links */}
        <nav className="hidden lg:flex flex-1 justify-center mr-8">
          <NavLinks isMobile={false} />
        </nav>

        {/* Right-Aligned Profile, Cart & Search */}
        <div className="flex items-center gap-4 flex-shrink-0 ml-auto">
          {/* Cart */}
          <a href="/cart" className="flex items-center gap-2 hover:text-gray-300 transition">
            <ShoppingCart size={24} className="text-gray-800" />
          </a>

          {/* Profile */}

          <a href={user?"/profile":"/login" } className="flex items-center gap-2 hover:text-gray-300 transition">
            <User size={24} className="text-gray-800" />
          </a>

          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-lg bg-gray-800 text-white mr-4"
            aria-label="Search"
          >
            <Search size={25} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-800 text-white z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

        {/* Search Bar (Opens Below Header) */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white-500 p-4 flex flex-col items-center"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full max-w-lg p-3 rounded-lg bg-white-600 text-black placeholder-gray-400 border border-black-500 focus:ring-2 focus:ring-black-400 focus:outline-none shadow-md"
              placeholder="Search for sarees, collections..."
            />
            {/* Search Results */}
            {results.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-gray-800 text-white shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto z-50">
              {results.map((item) => (
                <li
                  key={item.name}
                  className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
                  onClick={() => handleItemClick(item.link)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>

     

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
             initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-6 shadow-ld flex flex-col lg:hidden z-40"
          >
            <NavLinks isMobile={true}/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
