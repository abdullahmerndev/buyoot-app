import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h4>Contact Buyoot</h4>
      <form className="cta-form">
        <label>Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="text" required />
        <label>Message</label>
        <textarea required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
