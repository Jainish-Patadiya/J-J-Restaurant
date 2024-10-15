const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    MobileNumber: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true,
        minlength: 6
    },
    AccessLevel: {
        type: String,
        required: true
    }
});

// Export the User model
module.exports = mongoose.model('Users', UserSchema);
