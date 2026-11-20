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

  const gmailUser = process.env.GMAIL_USER || 'kalpanabhandari383@gmail.com';
  const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS;

  if (!gmailPass) {
    return res.status(500).json({
      success: false,
      message:
        'GMAIL_APP_PASSWORD environment variable is not configured. Please set your 16-character Google App Password in Vercel or .env.local.',
    });
  }

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
      to: gmailUser,
      subject: `Portfolio Contact: ${subject || 'New Message'} (from ${name})`,
      text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #20b2a6; margin-top: 0;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} (&lt;<a href="mailto:${email}">${email}</a>&gt;)</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
          <h3 style="color: #334155; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message</h3>
          <p style="white-space: pre-wrap; background: #f8fafc; padding: 15px; border-radius: 6px; color: #1e293b; line-height: 1.6;">${message}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
          <p style="font-size: 12px; color: #64748b;">Delivered directly to ${gmailUser} via your Gmail App Key.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Message delivered directly to your Gmail inbox!',
    });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to send email through Gmail SMTP.',
    });
  }
}
