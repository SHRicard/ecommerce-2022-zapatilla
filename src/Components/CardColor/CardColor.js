import React from "react";
import "./CardColor.css";
const CardColor = (props) => {
  return (
    {props.img.map((img) => {
        return <CardColor alt="noImg" props={img} key={img.id} />;
      })}
         <div className="main-images">
            <img src={props.imagen} />;
</div>)};

export default CardColor;
