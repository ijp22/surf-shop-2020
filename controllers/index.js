const User = require('../models/user');

module.exports = {
    postRegister(req, res, next) {
        const newUSer = new User({
            username: req.body.username,
            email: req.body.email,
            image: req.body.image
        });
        User.register(newUser, req.body.password, (err) => {
            if(err) {
                console.log('Error while user register!', err);
                return next(err);
            } 
            console.log('User Registered!');
            res.redirect('/');
        });
    }
};