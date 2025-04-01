require("dotenv").config();
let express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


// Contact API route
app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required!" });
    }
  
    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email app password
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
      console.error(error);
      res.status(500).json({ error: "Failed to send message!" });
    }
  });
  

let port = process.env.PORT;



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
