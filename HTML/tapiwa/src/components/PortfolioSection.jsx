import React from 'react';
import img1 from './'
const PortfolioSection = () => (
  <section className="home">
    <div className="table">
      <h1 className="head1">PORTFOLIO</h1>
      <img src="blue-star.png" alt="Star" />
    </div>
    <div className="grid-container">
      {['cake.png', 'circus.png', 'safe.png', 'cabin.png', 'game.png', 'submarine.png'].map((img) => (
        <div key={img} className="grid-item">
          <img src={`${img}.png`} alt={img} />
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioSection;
