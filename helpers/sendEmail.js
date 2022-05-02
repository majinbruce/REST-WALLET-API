import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import "dotenv/config";

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:process.env.SENDGRID_API_KEY,
    },
  })
);

export const signUpMail = (mail) => {
  transporter.sendMail({
    from: "<omkar.c.344@gmail.com>",
    to: `${mail}`,
    subject: "signup confirmation",
    html: `
    <h2>you have succesfully signed up for my wallet</h3>
    <h3>you receive signup bonus of 1000 tokens</h3>
    `,
  });
};

export const txSuccesMail = (mail, details) =>
  transporter.sendMail({
    from: "<omkar.c.344@gmail.com>",
    to: `${mail}`,
    subject: "Transaction sent successfully!",
    html: `
      <h1>${details}</h1>
      <h2></h2>
  `,
  });

export const txFailureMail = (mail, details) =>
  transporter.sendMail({
    from: "<omkar.c.344@gmail.com>",
    to: `${mail}`,
    subject: "Transaction failed!",
    html: `
    <h1>${details}</h1>
      <h2></h2>
  `,
  });
