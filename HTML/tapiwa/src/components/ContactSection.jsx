import React from 'react';

const ContactSection = () => (
  <section className="contact-container">
    <div>
      <p className="contct">CONTACT ME</p>
      <img src="blue-star.png" alt="Star" />
      <form>
        <input type="text" placeholder="Name" name="Name" required /><br /><br />
        <input type="email" placeholder="Email address" name="Email" required /><br /><br />
        <input type="tel" placeholder="Phone Number" name="Phone" required /><br /><br />
        <textarea id="Messages" placeholder="Messages" required></textarea><br /><br />
        <button className="submit" type="submit">Send</button>
      </form>
    </div>
  </section>
);

export default ContactSection;
