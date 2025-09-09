const { Router } = require('express');
const {handleUserSignin, handleUserSignup}=require('../controllers/user');
const router = Router();

router.get('/signin', (req, res) => {
    res.render('signin');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup',handleUserSignup );

router.post('/signin',handleUserSignin);

router.get('/logout',(req,res)=>{
    res.clearCookie("token").redirect('/');
})

module.exports = router;
