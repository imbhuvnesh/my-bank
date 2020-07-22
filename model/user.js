const mongoose = require('mongoose');

const mySchema = mongoose.Schema;

const userSchema = new mySchema({
    name: {
        type: String,
        required: [true, "A name is required"]
    },
    contact: {
        type: String,
        required: [true, "Phone no. is required"]
    },
    accountType: {
        type: String,
        required: [true, "Account Type is required"]
    }
});

const User = mongoose.model("user", userSchema);

module.exports = User;