const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // reference to the User model
    },
    bio: {
        type: String,
        required: [true, 'Bio is required'],
        trim: true,
        maxlength: 500,
    },
    website: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Profile', ProfileSchema);
