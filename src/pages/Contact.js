import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    document.body.classList.add('contact-page');
    return () => {
      document.body.classList.remove('contact-page');
    };
  }, []);

  return (
    <div className="contact-container">
      <header className="header-contact">
        <h1 className="contact-header">Contact</h1>
        <hr className="header-line" />
        <h2 className="contact-subheader">Let's Connect</h2>
        <div className="contact-body">
          <p className="text">
            I am currently looking for 2024/2025 internship opportunities. Please shoot me an email or connect with me on LinkedIn to start a conversation. I would love to get to know you better and share more about myself!
          </p>
          <a href="mailto:nan.mogili@gmail.com" className="contact-button">Say Hello!</a>
        </div>
      </header>
    </div>
  );
}

export default Contact;
