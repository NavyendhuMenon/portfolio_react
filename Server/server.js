require("dotenv").config();
let express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());

// Configure CORS
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend URL
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// Contact API route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format!" });
  }

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email app password
    },
    tls: {
        rejectUnauthorized: false, // Disables SSL certificate validation
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your receiving email
    subject: `New Contact Form Submission from ${name}`,
    text: `You received a new message from:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message!" });
  }
});

// Start the server
let port = process.env.PORT || 5000; // Default to 5000 if no PORT is set
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

