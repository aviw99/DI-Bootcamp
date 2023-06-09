const express = require('express');
const router = express.Router();
const {
    _getAllUsers,
    handleLogin,
    handleRegistration
} = require('../controllers/script.js');

router.get('/users', _getAllUsers);
router.post('/login', handleLogin);
router.post('/register', handleRegistration);

module.exports = {
    router
}