import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: name, email, and message.',
    });
  }

  const gmailUser =
    process.env.VITE_GMAIL_USER ||
    process.env.GMAIL_USER ||
    'sunilpandey7201@gmail.com';
  const gmailPass =
    process.env.VITE_GMAIL_APP_PASSWORD ||
    process.env.GMAIL_APP_PASSWORD ||
    process.env.GMAIL_PASS ||
    'ybqe wuxr qpjd iiot';
  const targetEmail = 'kalpanabhandari383@gmail.com';

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${gmailUser}>`,
      replyTo: email,
      to: targetEmail,
      subject: `Portfolio Message: ${subject || 'New Contact'} (from ${name})`,
      text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #20b2a6; margin-top: 0; font-size: 20px;">New Portfolio Message</h2>
          <p style="margin: 8px 0; color: #334155;"><strong>From:</strong> ${name} (&lt;<a href="mailto:${email}" style="color: #20b2a6;">${email}</a>&gt;)</p>
          <p style="margin: 8px 0; color: #334155;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 18px 0;" />
          <h3 style="color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</h3>
          <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px; color: #1e293b; line-height: 1.6; margin: 0;">${message}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 18px 0;" />
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">Delivered to ${targetEmail}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Thank you for your message!',
    });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to send email.',
    });
  }
}
