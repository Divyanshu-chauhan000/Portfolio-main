const express =  require('express');
const postContactDetails = require('../controllers/contactController');
const contactRouter =  express.Router();

contactRouter.post('/contact-details' , postContactDetails);

module.exports =  contactRouter;