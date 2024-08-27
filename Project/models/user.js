const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect("mongodb://127.0.0.1:27017/miniproject");

const UserSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String, 
    age: Number,
    password: String,
    profilepic: {
        type: String,
        default: "default.jpg"
    },
    posts: [
        { type: mongoose.Schema.Types.ObjectId, ref: "post" }
    ]
})

module.exports = mongoose.model('user', UserSchema)