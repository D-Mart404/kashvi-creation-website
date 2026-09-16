const baseProducts = [
  { id: 1, name: "Banarasi Saree", price: 2500 },
  { id: 2, name: "Kanjivaram Saree", price: 3500 },
  { id: 3, name: "Blue Chiffon Saree", price: 1800 },
  { id: 4, name: "Pastel Chiffon Saree", price: 1800 },
  { id: 5, name: "Printed Chiffon Saree", price: 1800 },
  { id: 6, name: "Evening Chiffon Saree", price: 1800 },
];

const categoryProducts = [
  { id: 101, name: "Crimson Red Silk Saree", price: 3499 },
  { id: 102, name: "Royal Blue Silk Saree", price: 4299 },
  { id: 103, name: "Emerald Green Silk", price: 2999 },
  { id: 104, name: "Golden Aura Silk Saree", price: 5499 },
  { id: 105, name: "Magenta Silk Elegance", price: 3899 },
  { id: 111, name: "Sunny Yellow Cotton", price: 1299 },
  { id: 112, name: "Indigo Print Cotton Saree", price: 1599 },
  { id: 113, name: "Pure White Cotton Blend", price: 1899 },
  { id: 114, name: "Earthy Brown Cotton", price: 1499 },
  { id: 115, name: "Pastel Pink Cotton Saree", price: 1799 },
  { id: 121, name: "Midnight Black Designer", price: 6999 },
  { id: 122, name: "Silver Sequined Saree", price: 8499 },
  { id: 123, name: "Peach Floral Designer", price: 5999 },
  { id: 124, name: "Turquoise Embellished Saree", price: 7299 },
  { id: 125, name: "Rose Gold Designer Saree", price: 9999 },
  { id: 131, name: "Glittering Silver Party Wear", price: 4999 },
  { id: 132, name: "Ruby Red Party Saree", price: 5599 },
  { id: 133, name: "Sapphire Blue Party Wear", price: 6299 },
  { id: 134, name: "Onyx Black Shimmer Saree", price: 4799 },
  { id: 135, name: "Lavender Party Elegance", price: 5199 },
];

const collectionProducts = [
  { id: 201, name: "Regal Red Bridal Saree", price: 12999 },
  { id: 202, name: "Golden Embroidery Wedding", price: 14499 },
  { id: 203, name: "Royal Blue Heavy Saree", price: 11999 },
  { id: 204, name: "Maroon Zari Work Bridal", price: 15499 },
  { id: 205, name: "Peach Bridal Elegance", price: 13899 },
  { id: 211, name: "Vibrant Yellow Festive", price: 4299 },
  { id: 212, name: "Emerald Green Celebration", price: 4599 },
  { id: 213, name: "Magenta Diwali Special", price: 4899 },
  { id: 214, name: "Ruby Red Festive Saree", price: 4499 },
  { id: 215, name: "Royal Purple Occasion", price: 4799 },
];

const newArrivalProducts = [
  ...categoryProducts.slice(0, 10).map((product, index) => ({ ...product, id: 301 + index })),
  ...collectionProducts.map((product, index) => ({ ...product, id: 311 + index })),
];

const bestSellerProducts = [
  ...categoryProducts.slice(10).map((product, index) => ({ ...product, id: 401 + index })),
  ...baseProducts.map((product, index) => ({ ...product, id: 421 + index })),
];

export const products = [
  ...baseProducts,
  ...categoryProducts,
  ...collectionProducts,
  ...newArrivalProducts,
  ...bestSellerProducts,
];

export const getProductById = (id) => products.find((product) => product.id === Number(id));
