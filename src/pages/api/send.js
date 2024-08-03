import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';
import { AcknowledgmentEmail } from '@/components/AcknowledgmentTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

      if (!email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
      }

      // Send email to your receiving address
      const data = await resend.emails.send({
        from: process.env.FROM_EMAIL, 
        to: [process.env.TO_EMAIL], 
        subject: subject,
        reply_to: email, // User's email as reply-to
        react: <EmailTemplate name={name} email={email} subject={subject} message={message} />
      });

      // Send acknowledgment email to the user
      const acknowledgment = await resend.emails.send({
        from: process.env.FROM_EMAIL, // e.g., 'no-reply@yourdomain.com'
        to: [email], // User's email
        subject: `Thank you for reaching out!`,
        react: (
          <AcknowledgmentEmail
            name={name}
            email={email}
            subject={`Re: ${subject}`}
            message={`Thank you for reaching out! We have received your message and will get back to you soon.\n\nYour message:\n${message}`}
          />
        ),
      });

      res.status(200).json({ data, acknowledgment });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
