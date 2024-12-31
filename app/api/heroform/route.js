import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  try {
    const { name, email, phoneNumber, subject, message } = await req.json();

    const toEmail = process.env.SMTPEMAIL; // Replace with the actual recipient email
    const password = process.env.SMTPPASSWORD;
    const fromEmail = process.env.FROMEMAIL; // Replace with the actual sender email

    // Check if environment variables are defined
    if (!toEmail || !password || !fromEmail) {
      console.error("Missing environment variables");
      return new Response("Internal Server Error", { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false,
      auth: {
        user: fromEmail,
        pass: password,
      },
    });

    const mailOptions = {
      from: fromEmail, // Use fromEmail to indicate the sender
      to: toEmail,
      subject: `HERO FORM: Pro Ghost Writing Services received from ${email}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Subject: ${subject}
        Message: ${message} // Use message instead of query
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response("Query Sent", { status: 200 });
    
  } catch (error) {
    console.error("Error handling form data:", error);
    return new Response("Failed to submit form", { status: 500 });
  }
};
