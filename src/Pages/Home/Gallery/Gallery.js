import React from "react";
import './Gallery.css';
import photo1 from "../../../images/gallery/1.jpg";
import photo3 from "../../../images/gallery/3.jpg";
import photo4 from "../../../images/gallery/4.webp";
import photo5 from "../../../images/gallery/5.jpg";
import photo6 from "../../../images/gallery/6.jpg";
import photo2 from "../../../images/gallery/2.jpg";

const Gallery = () => {
  return (
    <div className="lightbox container my-5">
      <h1 className="text-center text-primary my-5">New Arrivals</h1>
      <div className="row">
        <div className="col-lg-6">
          <img
            src={photo1}
            alt=""
            className="w-100 mb-2 mb-md-4 shadow-1-strong rounded scalable-img"
          />
        </div>
        <div className="col-lg-3">
          <img
            src={photo2}           
            alt=""
            className="w-100 shadow-1-strong rounded scalable-img"
          />
        </div>
        <div className="col-lg-3">
          <img
            src={photo3}
            alt=""
            className="w-100 shadow-1-strong rounded scalable-img"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <img
            src={photo4}           
            alt=""
            className="w-100 mb-2 mb-md-4 shadow-1-strong rounded scalable-img"
          />
        </div>
        <div className="col-lg-3">
          <img
            src={photo5}           
            alt=""
            className="w-100 shadow-1-strong rounded scalable-img"
          />
        </div>
        <div className="col-lg-6">
          <img
            src={photo6}
            alt=""
            className="w-100 shadow-1-strong rounded scalable-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
