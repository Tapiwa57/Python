// Card.jsx
// components/PortfolioSection.jsx
import React from 'react';


const PortfolioSection = () => {
  const images = [
    'cake.png',
    'circus.png',
    'safe.png',
    'cabin.png',
    'game.png',
    'submarine.png'
  ];

  return (
    <section className="home">
      <div className="table text-center mb-4">
        <h1 className="head1 text-3xl font-bold">PORTFOLIO</h1>
        <img src="blue-star.png" alt="Star" className="mx-auto my-2" />
      </div>

      {/* One card with all images */}
      <ImageCard images={images} title="My Portfolio Projects" />
    </section>
  );
};

export default PortfolioSection;


