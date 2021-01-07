const express = require('express');
const router = express.Router();
const { postRegister } = require('../controllers/index');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('Get /register');
});

/* POST /register */
router.post('/register', postRegister);

/* GET /login */
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login */
router.post('/login', (req, res, next) => {
  res.send('POST /login');
});

/* GET /profile */
router.get('/profile', (req, res, next) => {
  res.send('Get /profile');
});

/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/user_id');
});

/* GET /forgot-password */
router.get('/forgot', (req, res, next) => {
  res.send('Get /forgot');
});

/* PUT /forgot-password */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET /reset-password/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send('Get /reset/:token');
});

/* PUT /reset-password/:token */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});

module.exports = router;