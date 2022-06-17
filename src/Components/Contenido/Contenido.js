import React from "react";
import Fila from "../../util/img/Carrusel/Fila.jpg";
import Topper from "../../util/img/Carrusel/topper.jpg";
import Topper2 from "../../util/img/Carrusel/topper2.jpg";
import Catalogo from "../Catalogo/Catalogo.js";

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
              <img src={Fila} className="d-block w-100" alt="..." />
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

      <Catalogo />
    </div>
  );
};

export default Contenido;
