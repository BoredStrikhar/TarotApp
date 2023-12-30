import "./CardComponent.css";
import React from "react";

type Card = {
  name: string;
  name_en: string;
  image_link: string;
};

export function CardComponent(Card: Card) {
  const url: string = "cards/" + Card.name_en;
  return (
    <a className="card-wrapper" href={url}>
      <img className="card-image" src={Card.image_link}></img>
      <span className="card-title">{Card.name}</span>
    </a>
  );
}
