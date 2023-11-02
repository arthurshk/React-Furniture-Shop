import React from 'react';
import Layout from '../component/layout/layout';
import './contact.css';
function Contact() {
  return (
    <Layout>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          Happy Shopping! For any inquiries or concerns please contact us through the provided email, phone or mail P.O. BOX
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>furnituremart@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>854-201-495</p>
          </div>
          <div className="contact-item">
            <h3>Address</h3>
            <p>395 Winchester Boulevard, Dubai, UAE</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;