import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    verified: { type: Boolean, default: false } ,
    cart: [{ type: Number, default: [] }],
    wishlist:[{type:Number,default:[]}],
    adress:{type:String,default:""},
});

const User = mongoose.model("User", userSchema);
export default User;
