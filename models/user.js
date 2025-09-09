const { createHmac, randomBytes } = require('crypto');
const {createUserToken}=require('../services/auth');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: "USER",
    },
    profileImageURL: {
        type: String,
        default: '/Images/default.png'
    }
});
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return;
    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac('sha256', salt).update(user.password).digest('hex');

    this.salt = salt;
    this.password = hashedPassword;
    next();
});

userSchema.static('matchPasswordAndGenerateToken', async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Errror("User not Found");
    const salt = user.salt;
    const hashedPassword = user.hashedPassword;

    const userProvidedHash = createHmac("sha256", salt).update(password).digest('hex');

    if (!userProvidedHash === hashedPassword) throw new Error("Incorrect Password");
    const token=createUserToken(user);
    return token;
})

const User = mongoose.model('user', userSchema);

module.exports = User;