const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: String(process.env.EMAIL_SECURE) === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendResetEmail(to, link) {
  const info = await transporter.sendMail({
    from: `"Auth System" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Password Reset Request",
    text: `Click the link to reset your password: ${link}\nThis link expires soon.`,
    html: `<p>Click the link to reset your password:</p>
           <p><a href="${link}">${link}</a></p>
           <p>This link expires soon.</p>`
  });
  return info.messageId;
}

module.exports = { sendResetEmail };
