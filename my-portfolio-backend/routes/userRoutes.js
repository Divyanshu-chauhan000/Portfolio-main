const express =  require('express');
const {getUserHome, postUserHome} = require('../controllers/userController');

const userRouter = express.Router();


userRouter.get('/user-home' , getUserHome);
userRouter.post('/user', postUserHome)

module.exports = userRouter;