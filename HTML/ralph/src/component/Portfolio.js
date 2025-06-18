import React from "react";

const projects = [
  "cake.png", "circus.png", "safe.png",
  "cabin.png", "game.png", "submarine.png",
];

const Portfolio = () => (
  <section className="portfolio-section">
    <div className="table">
        <h2>PORTFOLIO</h2>
        <img  src="blue-star.png"></img>
    </div>
    <div className="portfolio-grid">
      {projects.map((src, i) => (
        <img key={i} src={`/componentt${src}`} alt={`Project ${i + 1}`} />
      ))}
    </div>
  </section>
);

export default Portfolio;
