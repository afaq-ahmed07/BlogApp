const express = require("express");
require('dotenv').config();
const path = require("path");
const mongoose = require('mongoose');
const process = require('process');
const cookieParser = require('cookie-parser');


const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');

const Blog = require('./models/blog');
const { checkAuthenticationCookie } = require("./middlewares/auth");


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));



app.use(checkAuthenticationCookie("token"));


app.use('/user', userRoute);
app.use('/blog', blogRoute);
app.get('/', async (req, res) => {
    const allBlogs = await Blog.find({}).populate('createdBy');
    res.render('home', {
        user: req.user,
        blogs: allBlogs,
    });
})

app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`);
})