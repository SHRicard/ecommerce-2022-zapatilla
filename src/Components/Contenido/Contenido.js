import React from "react";
import Addidas from "../img/addidas.jpg";
import Topper from "../img/topper.jpg";
import Topper2 from "../img/topper2.jpg";
import Card from "../Card/Card.js";

import "./Contenido.css";

const Contenido = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Addidas} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Topper} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Topper2} className="d-block w-100 " alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-12 text-center p-3">
        <small className="text-muted text-Anton fs-4 ">
          Descuentos Imperdibles
        </small>
      </div>

      <Card />
    </div>
  );
};

export default Contenido;
