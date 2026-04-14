const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendMail(name, email, message) {
  const subject = "Mail Regarding Feedback";
  const from = process.env.EMAIL || "noreply@portfolio.com";
  const to = process.env.EMAIL;
  const templatePath = path.join(__dirname, "..", "templates/", "feedback.hbs");
  const template = handlebars.compile(fs.readFileSync(templatePath, "utf8"));
  const html = template({ name: name, message: message, email });

  const msg = {
    to,
    from,
    replyTo: email,
    subject,
    html,
  };

  await sgMail.send(msg);
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
