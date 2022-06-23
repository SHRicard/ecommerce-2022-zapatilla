import React from "react";
import CardsOfertas from "../CardsOferta/CardsOfertas.js";
import OfertaJson from "../../util/Ofertas.json";
// <---------oferta 1--------->
const oferta1 = (OfertaJson) => OfertaJson.id === 1;
const productOferta1 = OfertaJson.filter(oferta1);
// <---------oferta 2--------->
const oferta2 = (OfertaJson) => OfertaJson.id === 2;
const productOferta2 = OfertaJson.filter(oferta2);
// <---------oferta 3--------->
const oferta3 = (OfertaJson) => OfertaJson.id === 3;
const productOferta3 = OfertaJson.filter(oferta3);
// <---------oferta 4--------->
const oferta4 = (OfertaJson) => OfertaJson.id === 4;
const productOferta4 = OfertaJson.filter(oferta4);
// <---------oferta 5--------->
const oferta5 = (OfertaJson) => OfertaJson.id === 5;
const productOferta5 = OfertaJson.filter(oferta5);
// <---------oferta 6--------->
const oferta6 = (OfertaJson) => OfertaJson.id === 6;
const productOferta6 = OfertaJson.filter(oferta6);
const CaruselOferta = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active d-flex justify-content-center">
          {/* <------ Start Cards Ofertas id 1----> */}
          {productOferta1.map((oferta) => {
            return (
              <div className="mx-3">
                <CardsOfertas key={oferta.id} props={oferta} />
              </div>
            );
          })}
          {/* <------ End Cards Ofertas id 1----> */}
          {/* <------ Start Cards Ofertas id 2----> */}
          {productOferta2.map((oferta) => {
            return (
              <div className="mx-3">
                <CardsOfertas key={oferta.id} props={oferta} />
              </div>
            );
          })}
          {/* <------ End Cards Ofertas id 2----> */}
          {/* <------ Start Cards Ofertas id 3----> */}
          {/* {productOferta3.map((oferta) => {
            return (
              <div className="mx-3">
                <CardsOfertas key={oferta.id} props={oferta} />
              </div>
            );
          })} */}
          {/* <------ End Cards Ofertas id 3----> */}
        </div>
        <div className="carousel-item d-flex justify-content-center">
          {/* <------ Start Cards Ofertas id 4----> */}
          {/* {productOferta4.map((oferta) => {
            return (
              <div className="mx-3">
                <CardsOfertas key={oferta.id} props={oferta} />
              </div>
            );
          })} */}
          {/* <------ End Cards Ofertas id 4----> */}
          {/* <------ Start Cards Ofertas id 5----> */}
          {productOferta5.map((oferta) => {
            return (
              <div className="mx-3">
                <CardsOfertas key={oferta.id} props={oferta} />
              </div>
            );
          })}
          {/* <------ End Cards Ofertas id 5---> */}
          {/* <------ Start Cards Ofertas id 6----> */}
          {productOferta6.map((oferta) => {
            return (
              <div className="mx-3">
                <CardsOfertas key={oferta.id} props={oferta} />
              </div>
            );
          })}
          {/* <------ End Cards Ofertas id 6----> */}
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-black"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-black"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CaruselOferta;
