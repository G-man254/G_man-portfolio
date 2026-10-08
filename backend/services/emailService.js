import transporter from "../config/mail.js";

export const sendEmail = async ({ name, email, message }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "d.kariuki.dev@gmail.com",
    replyTo: email,

    subject: `Portfolio Contact: ${name}`,

    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,

    html: `
      <h2>New Portfolio Contact</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <hr>

      <h3>Message</h3>

      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};