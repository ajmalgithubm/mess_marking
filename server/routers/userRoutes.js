const express = require('express')
const router = express.Router();
const {signUp, logIn} = require('../controllers/userController')
const {verifyToken} = require('../middleware/authMiddlewire')

router.post('/signup', signUp)
router.post('/login', logIn)
router.post('/', verifyToken )
module.exports = router;
