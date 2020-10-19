const nodemailer = require("nodemailer");
// mail -> asociada una demora
// te enviamos un correo a tu cuenta de mail

/*
    obj = {
        mail : 'clau@gmail.com',
        subject : 'Gracias por registrarte'
    }
*/
// mail()
const send = async ({ mail, subject = "Gracias por registrarte", message }) => {
  try {
    // HTTPS -> sacar verificacion en 2 pasos
    // permitir a gmail acceso a aplicaciones poco seguras
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const info = {
      to: mail,
      subject: subject,
      html: message,
    };
    const { messageId } = await transporter.sendMail(info);
    return messageId;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { send };
