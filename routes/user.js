const express = require('express');

const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.post('/signup', UserController.createUser);
router.post('/login', UserController.loginUser);
router.get('/:id', checkAuth, UserController.findOne);

module.exports = router;