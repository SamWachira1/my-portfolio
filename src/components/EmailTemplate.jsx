import * as React from 'react';

export const EmailTemplate = ({ name, email, subject, message }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333', maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
    <div style={{ backgroundColor: '#f7f7f7', padding: '10px 20px', borderBottom: '1px solid #ddd', borderRadius: '10px 10px 0 0' }}>
      <h2 style={{ margin: 0 }}>New Contact Form Submission</h2>
    </div>
    <div style={{ padding: '20px' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: '#2a7ae2', textDecoration: 'none' }}>{email}</a></p>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Message:</strong></p>
      <p style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>{message}</p>
    </div>

  </div>
);
