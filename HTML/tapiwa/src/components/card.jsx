// components/card.jsx
import React from 'react';

function ImageCard({ images, title }) {
  return (
    <div className="card border rounded-lg p-4 shadow-md max-w-md mx-auto mb-8">
      <h2 className="text-lg font-semibold mb-4 text-center">{title}</h2>
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`portfolio-${index}`}
            className="w-full h-auto rounded"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
