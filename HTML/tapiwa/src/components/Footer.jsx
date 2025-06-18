import React from 'react';

const Footer = () => (
  <>
    <footer>
      <div className="inner-footer">
        <p className="loca">LOCATION</p>
        <p className="loc">2215 John Daniel Drive<br />Clark, MO 65243</p>
      </div>
      <div className="inner-footer">
        <p className="Around">AROUND THE WEB</p>
        <nav className="icon">
          <ul>
            <li><a href="https://www.facebook.com/"><img src="facebook.png" alt="facebook" /></a></li>
            <li><img src="twitter.png" alt="twitter" /></li>
            <li><img src="linkedin.png" alt="linkedin" /></li>
            <li><img src="favicon.ico" alt="favicon" /></li>
          </ul>
        </nav>
      </div>
      <div className="inner-footer">
        <p className="Abot">ABOUT FREELANCER</p>
        <p className="abt">Freelance is a free use, MIT licensed Bootstrap theme created by Start Bootstrap.</p>
      </div>
    </footer>
    <section id="iner-footer">
      <div className="bottom-footer">
        <h3>&copy; Tapiwa Ndemera</h3>
      </div>
    </section>
  </>
);

export default Footer;
