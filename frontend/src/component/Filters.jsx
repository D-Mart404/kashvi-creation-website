import { useState, useEffect } from "react";

const Filters = ({ sarees, setFilteredSarees }) => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOrder, setSortOrder] = useState("default");

  // Function to filter and sort sarees
  const applyFilters = (updatedRange = priceRange, updatedSortOrder = sortOrder) => {
    let filtered = sarees.filter(
      (saree) => saree.price >= updatedRange[0] && saree.price <= updatedRange[1]
    );

    // Apply sorting to the filtered list
    if (updatedSortOrder === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (updatedSortOrder === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredSarees(filtered);
  };

  // Handle price range change
  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);
    
    if (newRange[0] > newRange[1]) return; // Prevent invalid range

    setPriceRange(newRange);
    applyFilters(newRange, sortOrder); // Apply filters and sorting
  };

  // Apply sorting when sort order changes
  useEffect(() => {
    applyFilters(priceRange, sortOrder); // Reapply filters with the new sort order
  }, [sortOrder]);

  return (
    <div className="mb-6 flex justify-between items-center gap-4">
      {/* Price Filter */}
      {/* <div className="flex flex-col">
        <label className="font-semibold">
          Price: ₹{priceRange[0]} - ₹{priceRange[1]}
        </label>
        <div className="flex gap-2 items-center">
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(0, e.target.value)}
          />
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(1, e.target.value)}
          />
        </div>
      </div> */}

      {/* Sorting */}
      {/* <select
        className="p-2 border rounded"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="default">Sort By</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select> */}
    </div>
  );
};

export default Filters;
