const User = require('../models/user');
async function handleUserSignin(req, res) {
    const { email, password } = req.body;
    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        return res.cookie('token', token).redirect('/');
    } catch (error) {
        res.render('signin', {
            error: 'Incorrect Password or Email',
        })
    };
}
async function handleUserSignup(req, res) {
    try {
        const { fullName, email, password } = req.body;
        await User.create({
            fullName,
            email,
            password,
        });
        return res.redirect('/');
    } catch (error) {
        res.render('signup', {
            error: 'Some Error occured',
        })
    }
}

module.exports = {
    handleUserSignin,
    handleUserSignup,
}