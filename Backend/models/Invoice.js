import mongoose from "mongoose";
const invoiceSchema = new mongoose.Schema({
    orderId: { type: Number, unique: true },
    username: String,
    amount: Number,
    items: [{ name: String, quantity: Number }],
    date: { type: Date, default: Date.now },
  });
  
  const Invoice = mongoose.model("Invoice", invoiceSchema);
 export default Invoice;