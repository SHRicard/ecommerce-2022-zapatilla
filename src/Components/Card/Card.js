import React from "react";
import NikeLogo from "../img/Nike/NikeLogo.png";
import BlancaBlanca from "../img/Nike/blanca-negra1.png";
import NegraBlanca from "../img/Nike/negra-blanca2.png";
import "./Card.css";

// let circle = document.querySelectorAll(".color-option");
// circle.addEventListener("click", (e) => {
//   let target = e.target;
//   if (target.classList.contains(circle)) {
//     circle.querySelector(".active").classList.remove("active");
//     target.classList.add("active");
//   }
// });

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
          {/* <img className="blanca2" src={NegraBlanca} alt="Nike" /> */}
        </div>
        <div>
          <span className="text-black text-Anton fs-4">Nike Vapormax</span>
          <p className=" detalle text-Anton ">
            Suela acolchada, cómoda y estable. Puntera y talón con protección
          </p>
          <div className="stars">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
          </div>
        </div>
        <div className="color-price">
          <div className="color-option">
            <span className="color">Color:</span>
            <div className="circles">
              <span className="circle blancoNegro active"></span>
              <span className="circle negroBlanco"></span>
            </div>
          </div>
          <div className="price">
            <span className="price_num">$5.300</span>
            <span className="price_letter">Nine dollar only</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
