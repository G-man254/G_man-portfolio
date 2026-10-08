import { sendEmail } from "../services/emailService.js";

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    await sendEmail({
      name,
      email,
      message,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send message.",
    });
  }
};