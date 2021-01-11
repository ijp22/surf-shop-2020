const User = require('../models/user');
const Post = require('../models/post');
const passport = require('passport');
const mapBoxToken = process.env.MAPBOX_TOKEN;


module.exports = {
    // GET /
    async landingPage(req, res, next) {
        // find all posts to populate into map
        const posts = await Post.find({});
        // render home page and pass in posts
        res.render('index', { posts, mapBoxToken, title: 'Surf Shop - Home' });
    },

    // POST / Register
    async postRegister(req, res, next) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            image: req.body.image
        });
        await User.register(newUser, req.body.password);
        res.redirect('/');
    },
    // POST / Login
    postLogin(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login' 
         })(req, res, next);
    },

    // Get / Logout
    getLogout(req, res, next) {
        req.logout();
        res.redirect('/');  
    }
};