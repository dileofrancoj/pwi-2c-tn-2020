const nodemailer = require("nodemailer");

const send = async ({
  mail,
  subject = "Gracias por registrarte",
  message: html,
}) => {
  try {
    //a href="" http://localhost:3000/registro/verify/uid

    const transporter = nodemailer.createTransport({
      service: "gmail", // host, port
      auth: {
        user: "dileo.francoj@gmail.com",
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const info = {
      to: mail,
      subject,
      html,
    };
    const { messageId } = await transporter.sendMail(info);
    return messageId;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { send };
