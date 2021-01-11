import React from "react";

/**
 * UI component for show a Gallery
 *
 */
const Gallery = ({ images=[] }) => (
  <div className="gallery">
    {images.length === 0 ? (
      <h2>LOADING........</h2>
    ) : (
      images.map((img, index) => {
        return <img src={img} key={index} alt=""></img>;
      })
    )}
  </div>
);

export default Gallery;
