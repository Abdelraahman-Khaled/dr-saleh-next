import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone_number, msg_subject, message } = body;

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email configuration missing in .env");
      return NextResponse.json(
        { error: "Internal Server Error: Email configuration missing" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      // غالباً الـ host بيكون mail.yourdomain.com أو السيرفر بتاع الاستضافة
      host: "mail.drsalehalkhalaf.com",
      port: 465, // البورت الشائع للـ SSL
      secure: true, // true لأن البورت 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // ضيف الجزء ده لو السيرفر عندك فيه مشكلة في الـ SSL Certificates
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: "info@drsalehalkhalaf.com",
      subject: `[Contact Form] ${msg_subject}`,
      text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone_number}
          Subject: ${msg_subject}
          
          Message:
          ${message}
        `,
      html: `
          <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
            <h2 style="color: #17a2b8;">New Inquiry from Dr. Saleh Al-Khalaf Website</h2>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone_number}</p>
            <p><strong>Subject:</strong> ${msg_subject}</p>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px; margin-top: 20px;">
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br/>")}</p>
            </div>
          </div>
        `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email: " + error.message },
      { status: 500 },
    );
  }
}
