const express = require('express')
const router = express.Router();
const { signUp, logIn, messMarking } = require('../controllers/userController')
const {verifyToken} = require('../middleware/authMiddlewire')

router.post('/signup', signUp)
router.post('/login', logIn)
router.post('/', verifyToken )
router.post('/messMarking', messMarking)
module.exports = router;
