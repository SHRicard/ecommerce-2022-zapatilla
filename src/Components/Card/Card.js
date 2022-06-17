import React from "react";
import Nike from "../../util/img/Logo/Nike.png";
import BlancaBlanca from "../../util/img/Nike/blancaN.png";
// import NegraBlanca from "../img/Nike/negra-blanca2.png";
import "./Card.css";

const Card = ({ props }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="product-card">
        <div className="logo-card">
          <img src={Nike} alt="NikeLogo" />
          <i class="bi bi-bag-heart"></i>
        </div>
        <div className="main-images">
          {/* //////////////////////////// */}
          <img className="blanca2" src={BlancaBlanca} alt="Nike" />
          {/* <img className="blanca2" src={NegraBlanca} alt="Nike" /> */}
          {/* ///////////////////////// */}
        </div>
        <div>
          <span className="text-black text-Anton fs-4">
            {props.marca}
            <small>&nbsp;{props.modelo}</small>
          </span>
          <p className=" detalle text-Anton">{props.description}</p>
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
            <span className="price_num">{props.precio}</span>
            <span className="price_letter">Nine dollar only</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
