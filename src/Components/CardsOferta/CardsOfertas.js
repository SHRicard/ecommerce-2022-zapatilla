import React from "react";
import Nike from "../../util/img/Logo/Nike.png";

import "./CardsOfertas.css";

const CardsOfertas = ({ props }) => {
  return (
    <div>
      <div className="product-card">
        <div className="logo-card">
          <img src={props.logo} alt="NikeLogo" />
          <i class="bi bi-bag-heart"></i>
        </div>
        <div className="main-images">
          {/* //////////////////////////// */}
          {props.img.map((foto) => {
            return <img key={foto.id} src={foto.foto} alt="NikeLogo" />;
          })}

          {/* ///////////////////////// */}
        </div>
        <div>
          <span className="text-black text-Anton fs-4">
            {props.marca}
            <small>&nbsp;{props.modelo}</small>
          </span>
          <p className=" detalle text-Anton">{props.description}</p>
          <div className="stars">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
          </div>
        </div>
        <div className="color-price">
          <div>
            <small className="text-Anton text-white ">{props.color}</small>
          </div>
          <div className="price">
            <span className="text-Anton text-white ">{props.precio}</span>
            <span className="text-Anton text-black price_letter">
              Peso Argentino
            </span>
          </div>
        </div>
        <div className=" d-grid gap-2 col-6 mx-auto pt-3">
          <button type="button" className="btn btn-dark btn-sm text-Anton">
            Mas Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsOfertas;
