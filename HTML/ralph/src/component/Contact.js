import React from "react";
const Contact = () => (
  <section className="contact-section">
    <h2>CONTACT ME</h2>
    <form>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="text" placeholder="Phone Number" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
