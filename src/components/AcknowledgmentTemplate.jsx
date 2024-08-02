import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const AcknowledgmentEmail = ({ name, subject, message }) => (
  <div style={{
    backgroundColor: '#F9FAFB',
    padding: '30px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: '"Roboto", sans-serif',
    color: '#4A4A4A',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  }}>
    <header style={{
      padding: '15px 0',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: '22px',
        color: 'black',
        margin: '0',
        fontWeight: '600',
      }}>
        Thank You for Reaching Out!
      </h1>
    </header>

    <main style={{ padding: '20px 30px', textAlign: 'left', color: '#4A4A4A' }}>
      <p style={{
        fontSize: '16px',
        margin: '0 0 10px',
        fontWeight: '500',
        fontFamily: '"Roboto", sans-serif',
        color: '#4A4A4A', // Ensures consistent text color
      }}>Hi {name},</p>
      <p style={{ fontSize: '15px', lineHeight: '1.6', margin: '10px 0 20px' }}>
        Thank you for reaching out! We have received your message regarding "<strong>{subject}</strong>" and will get back to you shortly.
      </p>
      <blockquote style={{
        backgroundColor: '#EDEFF1',
        padding: '15px 20px',
        borderLeft: '4px solid #007BFF',
        margin: '0 0 20px',
        fontStyle: 'italic',
        color: '#555555',
      }}>
        {message}
      </blockquote>

      <p style={{
        fontSize: '15px',
        color: '#555555',
        margin: '0 0 20px',
      }}>
        Best Regards,<br />
        Samuel Wachira
      </p>

      <div style={{ textAlign: 'center' }}>
        <a href="https://www.samuelwachira.com/" style={{
          backgroundColor: '#007BFF',
          color: '#FFFFFF',
          padding: '12px 25px',
          borderRadius: '5px',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '15px',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '20px 0',
        }}>
          Get Started
        </a>
      </div>
    </main>

    <footer style={{
      backgroundColor: '#F9FAFB',
      padding: '20px',
      textAlign: 'center',
      borderRadius: '0 0 10px 10px',
      borderTop: '1px solid #E0E0E0',
    }}>
      <p style={{ fontSize: '14px', margin: '0 0 10px', color: '#4A4A4A' }}>
        {/* Still have questions? Please contact me at 978-394-6388 */}
      </p>
      <p style={{ fontSize: '12px', margin: '0', color: '#7D7D7D' }}>Boston, MA</p>
      <div style={{ fontSize: '18px', marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <a href="TWITTER_URL" style={{ color: '#007BFF' }}><FaTwitter /></a>
        <a href="FACEBOOK_URL" style={{ color: '#007BFF' }}><FaFacebookF /></a>
        <a href="LINKEDIN_URL" style={{ color: '#007BFF' }}><FaLinkedinIn /></a>
        <a href="GITHUB_URL" style={{ color: '#007BFF' }}><FaGithub /></a>
      </div>
    </footer>
  </div>
);
