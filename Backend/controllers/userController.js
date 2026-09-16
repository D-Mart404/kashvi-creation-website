const cleanNumberArray = (items = []) => [...new Set(items.map(Number).filter(Number.isInteger))];

export const updateCart = async (req, res) => {
  const cart = cleanNumberArray(req.body.cart || req.body.newCart);

  req.user.cart = cart;
  await req.user.save();

  return res.json({
    success: true,
    message: "Cart updated successfully",
    cart: req.user.cart,
  });
};

export const updateWishlist = async (req, res) => {
  const wishlist = cleanNumberArray(req.body.wishlist);

  req.user.wishlist = wishlist;
  await req.user.save();

  return res.json({
    success: true,
    message: "Wishlist updated successfully",
    wishlist: req.user.wishlist,
  });
};
