import React from "react";
/// start img ///
import Fila from "../../util/img/Carrusel/Fila.jpg";
import Topper from "../../util/img/Carrusel/topper.jpg";
import Topper2 from "../../util/img/Carrusel/topper2.jpg";
///end img
//start componentes//
import CardNovedades from "../CardNovedades/CardNovedades.js";
import CardsOfertas from "../CardsOferta/CardsOfertas.js";
import CaruselOferta from "../CaruselOferta/CaruselOferta.js";
//end componentes///
///start Json///
import NovedadesJson from "../../util/Novedades.json";
import OfertasJson from "../../util/Ofertas.json";
///end Json///
import "./Contenido.css";

const Contenido = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* /////start carrusel//// */}
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
        {/* ////end carousel/// */}
        {/* ////start cards Novedades/// */}
        <div className="row d-flex justify-content-center">
          <small className="text-black text-Anton fs-2  text-center">
            Novedades
          </small>
          {NovedadesJson.map((Novedades) => {
            return (
              <div className="col-auto pb-3 d-flex justify-content-center">
                <CardNovedades key={Novedades.id} props={Novedades} />
              </div>
            );
          })}
        </div>
        {/* ///end cards Novedades/// */}
        <small className="text-black text-Anton fs-2  text-center">
          Precios Invatibles
        </small>
        {/* ///start carusel de Oferta/// */}

        <CaruselOferta />
        {/* ///end cards Oferta/// */}
      </div>
    </div>
  );
};

export default Contenido;
