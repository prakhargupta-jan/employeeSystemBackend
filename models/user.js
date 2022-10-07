const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');
const crypto = require('crypto')

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide a name"],
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, "Please provide a valid email"],
	},
    contactNo: {
        type: Number,
        validate: [function(n) {
            let p = 0;
            while (n) {
                p++;
                n/=10;
            } 
            return p == 10;
        }, 'Contact number must be of 10 digits']
    },
	password: {
		type: String,
		required: [true, "Please provide a password"],
		minlength: 8,
        select: false
	},
	passwordConfirm: { 
        type: String, required: [true, 'Please confirm your password'],
        validate: [function(el){ return el === this.password}, 'Password doesn\'t match ']
    },
    passwordChangedAt: Date,
	passwordResetToken: String,
	passwordResetExpires: String,
	role: {
		type: String,
		enum: ['employee', 'admin'],
		required: true
	}
});


const User = mongoose.model("User", UserSchema);

module.exports = User; 
