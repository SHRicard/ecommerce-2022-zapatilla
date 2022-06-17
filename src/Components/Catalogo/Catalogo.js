import React from "react";
import Card from "../Card/Card.js";
import NikeJson from "../../util/Nike.json";
import "./Catalogo.css";
const Catalogo = () => {
  return (
    <div className="container-fluid bg-dark">
      {NikeJson.map((Nike) => {
        return <Card key={Nike.id} props={Nike} />;
      })}
    </div>
  );
};

export default Catalogo;
