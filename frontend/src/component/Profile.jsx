import { useState, useEffect } from "react";
import { User, ShoppingCart, Heart, MapPin, Edit2 } from "lucide-react";
import { useSareeContext } from "../Sarrecontext"; 

const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;  

  };
 
  const user = getUser();
export default function Profile() {
  const [tab, setTab] = useState("orders");
  const [user, setUser] = useState({ name: "", email: "" });

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  const handlelogout=()=>{
    localStorage.removeItem("user");
    window.location.href = "/login"; 
  }
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        
        {/* Profile Header */}
        <div className="flex items-center border-b pb-6 mb-6">
          <img
            src="/user-avatar.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-md"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">{user.username}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <button className="ml-auto flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700" onClick={handlelogout}>
     
            Logout
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-6 border-b pb-4">
          {[
            { key: "orders", label: "Orders", icon: ShoppingCart },
            { key: "wishlist", label: "Wishlist", icon: Heart },
           
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                tab === key ? "bg-gray-800 text-white" : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setTab(key)}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="mt-6">
          {tab === "orders" && <Orders />}
          {tab === "wishlist" && <Wishlist />}
        
        </div>
      </div>
    </div>
  );
}

// Orders Component
function Orders() {
  const [invoices, setInvoices] = useState([]);
  const [error, setError] = useState("");



  const fetchInvoices = async (username) => {
    try {
      setError("");
      setInvoices([]);

      console.log("Fetching invoices for:", username); // 🔹 Debugging log

      const response = await fetch("http://localhost:5000/api/get-invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      console.log("Response received:", data); // 🔹 Debugging log

      if (!data.success) {
        setError(data.message || "Failed to fetch invoices.");
      } else {
        setInvoices(data.invoices);
      }
    } catch (err) {
      console.error("Error fetching invoices:", err);
      setError("Error fetching invoices. Please try again.");
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h3>
      <button onClick={() => fetchInvoices(user.username)}>Refresh</button>
      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-6">
        {invoices.length > 0 ? (
          invoices.map((invoice, index) => (
            <div key={index} className="border p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-lg">Invoice {index + 1}</h3>
              <p>Id:{invoice.orderId}</p>
              <p><strong>Date:</strong> {new Date(invoice.date).toLocaleDateString()}</p>
              <p><strong>Total Amount:</strong> ₹{invoice.amount}</p>
              <h4 className="font-semibold mt-2">Items:</h4>
              <ul className="list-disc pl-5">
                {invoice.items.map((item, idx) => (
                  <li key={idx}>{item.quantity} x {item.name}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">No invoices found.</p>
        )}
      </div>
    </div>
  );
}// Wishlist Component
 
function Wishlist() {
    const { sarees } = useSareeContext(); 
    const [wishlist, setWishlist] = useState([]);
  
    // Load wishlist from localStorage when component mounts
    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.wishlist) {
        setWishlist(storedUser.wishlist);
      }
    }, []);
  
    // Filter sarees that are in the wishlist
    const wishlistItems = sarees.filter((saree) => wishlist.includes(saree.id));
  
    return (
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Wishlist</h3>
        {wishlistItems.length === 0 ? (
          <p className="text-gray-600">Your wishlist is empty.</p>
        ) : (
          <div className="space-y-4">
            {wishlistItems.map((saree) => (
              <div key={saree.id} className="p-4 border rounded-lg flex justify-between items-center">
                <h4 className="font-semibold">{saree.name}</h4>
                <div className="flex gap-2">
                  {saree.Text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );}