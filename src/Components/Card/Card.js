import React from "react";
import NikeLogo from "../img/Nike/NikeLogo.png";
import BlancaBlanca from "../img/Nike/blanca-negra1.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="product-card">
        <div className="logo-card">
          <img src={NikeLogo} alt="NikeLogo" />
          <i class="bi bi-bag-heart"></i>
        </div>
        <div className="main-images">
          <img className="blanca2" src={BlancaBlanca} alt="Nike" />
        </div>
        <div>
          <span className="text-black text-Anton fs-4">Nike Vapormax</span>
          <p className="text-muted text-Anton fs-6">
            Suela acolchada, cómoda y estable. Puntera y talón con protección.
            Ideal para tu aventura.
          </p>
          <div className="stars">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
          </div>
          <div className="color-price">
            <div className="color-option">
              <span className="color">Color:</span>
              <div className="circles">
                <span className="circle blancoN"></span>
                <span className="circle blancoB"></span>
                <span className="circle negroB"></span>
                <span className="circle negroN"></span>
              </div>
            </div>
            <div className="price">
              <span className="price_num">$5.300</span>
              <span className="price_letter">Nine Dollar Only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
