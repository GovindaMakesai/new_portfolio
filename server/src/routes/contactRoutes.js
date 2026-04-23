const express = require("express");
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  const saved = await Contact.create({ name, email, message });

  if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_RECEIVER) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `New inquiry from ${name}`,
      text: `${message}\n\nReply to: ${email}`,
    });
  }

  res.status(201).json({ ok: true, id: saved._id });
});

module.exports = router;
