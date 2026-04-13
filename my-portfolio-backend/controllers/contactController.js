const express = require("express");
const handlebars = require("handlebars"); // html jo ki ab hbs file ha usko mail m bhjne k liy
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

function sendMail(name, email, message, callback) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const subject = "Mail Regarding Feedback";
  const from = process.env.EMAIL;
  const to = process.env.EMAIL;
  const templatePath = path.join(__dirname, "..", "templates", "feedback.hbs");
  const template = handlebars.compile(fs.readFileSync(templatePath, "utf8"));
  const html = template({ name: name, message: message, email });

  const mailOptions = {
    from,
    to,
    replyTo: email,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, callback);
}

const postContactDetails = (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);

  if (!name || !email || !message) {
    return res.status(400).json("Please fill in all fields.");
  }

  sendMail(name, email, message, (error, info) => {
    if (error) {
      console.error(error, "Error sending contact email");
      return res
        .status(500)
        .json("Unable to send email. Please try again later.");
    }

    console.log("Mail sent successfully", info.response);
    return res.status(200).json("Email sent successfully.");
  });
};

module.exports = postContactDetails;
