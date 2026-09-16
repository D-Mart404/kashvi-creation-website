import mongoose from "mongoose";
const invoiceSchema = new mongoose.Schema({
    orderId: {
      type: String,
      unique: true,
      default: () => `KC-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    username: String,
    email: String,
    amount: { type: Number, required: true },
    items: [{
      productId: Number,
      name: String,
      quantity: Number,
      price: Number,
    }],
    date: { type: Date, default: Date.now },
  });
  
  const Invoice = mongoose.model("Invoice", invoiceSchema);
 export default Invoice;
