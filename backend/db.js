const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mgmehakgoel:Lscp0u2LAa6GbgEp@cluster0.2oypqq9.mongodb.net/paytm");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 6
    }
});

const User = mongoose.model("User", UserSchema);

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
};