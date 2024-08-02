import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, subject, message } = req.body;

      if (!email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
      }

      const data = await resend.emails.send({
        from: process.env.FROM_EMAIL,
        to: [process.env.TO_EMAIL],
        subject: subject,
        reply_to: email,
        react: (
          <>
            <h1>{subject}</h1>
            <p>{message}</p>
          </>
        ),
      });

      if (data.error) {
        res.status(400).json({ error: data.error });
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: error.message });
    }
  } 
}
