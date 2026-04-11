const express =  require('express');
const handlebars =  require('handlebars');  // html jo ki ab hbs file ha usko mail m bhjne k liy
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

function sendMail(name ,email, message){
      var transporter = nodemailer.createTransport({
      service : 'gmail',
      auth :{
        user : process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })
    const subject = 'Mail Regarding Feedback'
    const to = email;
    const from = process.env.EMAIL;
    const template = handlebars.compile(fs.readFileSync(path.join(__dirname,('../'), 'templates/' , 'feedback.hbs') , 'utf8'));
    const html = template({name : name, message : message})


    const mailOptions = {
      from , 
      to,
      subject,
      html
    }

    transporter.sendMail(mailOptions, (error) =>{
    if(error){
      console.log(error, "this error is in mailoptions");
    }
    else{
      console.log("Mail sent successfully");
    }
    })
}

const postContactDetails = (req, res) =>{
  const {name , email , message} = req.body;
  console.log(name , email , message);
  sendMail(name , email, message);
}

module.exports = postContactDetails;