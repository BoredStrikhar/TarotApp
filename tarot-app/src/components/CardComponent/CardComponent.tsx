import "./CardComponent.css";
import React from "react";

type Card = {
  name: string;
  image_link: string;
};

export function CardComponent(Card: Card) {
  return (
    <div className="card-wrapper">
      <img className="card-image" src={Card.image_link}></img>
      <span className="card-title">{Card.name}</span>
    </div>
  );
}
