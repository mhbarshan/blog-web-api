import nodemailer from "nodemailer";
//const nodemailer =require('nodemailer')
const { SMTP_MAIL, SMTP_PASS } = process.env;
const sendMail = async (email, mailSubject, content) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "contact.monerkotha@gmail.com",
        pass: "offlhrlrdjbzqbir",
      },
    });

    const mailOptions = {
      from: "contact.monerkotha@gmail.com",
      to: email,
      subject: mailSubject,
      html: content,
    };

    transport.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Mail Sent", data.response);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
export default sendMail;
