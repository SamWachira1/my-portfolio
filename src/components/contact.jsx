"use client";

import { useState } from 'react';
import Footer from './Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send the message. Please try again.');
      }
    } catch (error) {
      alert('Failed to send the message. Please try again.');
    }
  };

  return (
    <>
  
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="name" className="block text-left text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-left text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-left text-lg font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-left text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full h-32 px-4 py-2 mt-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-4 focus:ring-teal-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

    <Footer/>
  </>

  );
}
