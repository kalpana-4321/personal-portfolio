import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function contactDevPlugin() {
  return {
    name: 'contact-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }

        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
          try {
            const env = loadEnv('development', process.cwd(), '');
            const data = JSON.parse(body || '{}');
            const { name, email, subject, message } = data;

            if (!name || !email || !message) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: 'Missing required fields' }));
              return;
            }

            const gmailUser = env.VITE_GMAIL_USER || env.GMAIL_USER || 'sunilpandey7201@gmail.com';
            const gmailPass = env.VITE_GMAIL_APP_PASSWORD || env.GMAIL_APP_PASSWORD || 'ybqe wuxr qpjd iiot';
            const targetEmail = 'kalpanabhandari383@gmail.com';

            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: { user: gmailUser, pass: gmailPass },
            });

            await transporter.sendMail({
              from: `"${name}" <${gmailUser}>`,
              replyTo: email,
              to: targetEmail,
              subject: `Portfolio Message: ${subject || 'New Contact'} (from ${name})`,
              text: `From: ${name} (${email})\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
                  <h2 style="color: #20b2a6;">New Portfolio Message</h2>
                  <p><strong>From:</strong> ${name} (&lt;<a href="mailto:${email}">${email}</a>&gt;)</p>
                  <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                  <hr style="border: 1px solid #e2e8f0; margin: 15px 0;" />
                  <p style="white-space: pre-wrap; background: #f8fafc; padding: 15px; border-radius: 6px;">${message}</p>
                </div>
              `,
            });

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, message: 'Thank you for your message!' }));
          } catch (err) {
            console.error('Contact API dev server error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: err.message }));
          }
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), contactDevPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
