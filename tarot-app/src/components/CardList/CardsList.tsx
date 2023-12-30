import { CardComponent } from "../CardComponent/CardComponent";
import "./CardsList.css";
import React from "react";

type Card = {
  name: string;
  name_en: string;
  image_link: string;
};

type CardsListProps = {
  cards: Card[];
};

export function CardsList(CardListProps: CardsListProps) {
 return (
   <div className="cards-list-wrapper">
     {CardListProps.cards.map((card) => (
       <CardComponent name={card.name} 
       name_en={card.name_en}
       image_link={card.image_link} />
     ))}
   </div>
 );
}
