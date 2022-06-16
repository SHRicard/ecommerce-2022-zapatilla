import React from "react";
import Vapor from "../img/Nike/vapor.png";
import Frente from "../img/Gaelle/frente300w.jpg";
import Talon from "../img/Gaelle/talon300w.jpg";
import Zuela from "../img/Gaelle/zuela300w.jpg";
import "./CardsOfertas.css";
const CardsOfertas = () => {
  return (
    <div className="c">
      <div className="card">
        <div className="imgBox">
          <img src={Vapor} alt="vapor" className="vapor" />
          <h2 className="text-Anton text-black">Nike Vapormax</h2>
        </div>
        <div className="content">
          <div className="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="color">
            <h3>Color:</h3>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default CardsOfertas;
