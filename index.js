const express = require("express");
const path = require("path");
const mongoose = require('mongoose');



const userRoute = require('./routes/user');


mongoose.connect('mongodb://127.0.0.1:27017/blogify').then((e) => console.log("MongoDB connected"));

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/user', userRoute);
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`);
})