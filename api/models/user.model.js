import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
     avatar: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VJLwp5KJ11CNO-SxlRkDYNOSGlJA4uCzQUNl-6eZcj7ZZHZeporxovfS&s=10"
     },
}, 
{ timestamps: true }
);

const User = mongoose.model('user', userSchema);

export default User;