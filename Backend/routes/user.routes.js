
const express = require ('express');
const router = express.Router();
const userControler = require('../controllers/user.controller')
const {body} = require('express-validator')

router.post('/register',
    [
    body('email').isEmail().withMessage('Invalid Eamil'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 character long'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 character long'),
   
   ], 
   userControler.registerUser
   )




module.exports = router;