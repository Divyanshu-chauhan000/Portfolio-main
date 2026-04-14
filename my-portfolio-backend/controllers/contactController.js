const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

async function sendMail(name, email, message) {
  const subject = "Mail Regarding Feedback";
  const to = process.env.EMAIL;
  const templatePath = path.join(__dirname, "..", "templates/", "feedback.hbs");
  const template = handlebars.compile(fs.readFileSync(templatePath, "utf8"));
  const html = template({ name: name, message: message, email });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    replyTo: email,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
}

const postContactDetails = async (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);
  try {
    await sendMail(name, email, message);
    res.send("Mail sent");
  } catch (error) {
    console.log(error);
    res.status(500).send("Mail Failed");
  }
};

module.exports = postContactDetails;
