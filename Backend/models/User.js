import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true, select: false },
    password: { type: String, select: false },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    verified: { type: Boolean, default: false } ,
    cart: [{ type: Number, default: [] }],
    wishlist:[{type:Number,default:[]}],
    address:{type:String,default:""},
});

const User = mongoose.model("User", userSchema);
export default User;
