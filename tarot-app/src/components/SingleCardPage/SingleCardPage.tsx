import { useParams } from "react-router-dom";
import "./SingleCardPage.css";
import React, { useEffect, useState } from "react";
import { Tags } from "../Tags/Tags";

type SingleCard = {
 id: string,
 name: string,
 arcana: string,
 suit: string,
 yes_or_no: string,
 image_link: string,
 common_direct_meaning: string,
 common_direct_meaning_tags: string,
 common_inverted_meaning: string,
 common_inverted_meaning_tags: string,
 love_direct_meaning: string,
 love_direct_meaning_tags: string,
 love_inverted_meaning: string,
 love_inverted_meaning_tags: string,
 career_direct_meaning: string,
 career_direct_meaning_tags: string,
 career_inverted_meaning: string,
 career_inverted_meaning_tags: string,
 health_direct_meaning: string,
 health_direct_meaning_tags: string,
 health_inverted_meaning: string,
 health_inverted_meaning_tags: string,
};

export function SingleCardPage() {
  const [card, setCard] = useState<SingleCard>();

  const { name_en } = useParams();

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(
        `http://localhost:8080/api/card/name?name_en=${name_en}`
      );
      const data = await response.json();
      setCard(data);
    };
    fetchCards()
  }, [name_en]);
  return (
    <div className="single-card-page">
      <h1 className="single-page-card-title">{card?.name}</h1>
      <div className="single-card">
        <span className="single-page-card-subtitle">Обычное значение</span>
        <div className="single-card-wrapper">
          <img src={card?.image_link} className="card-image"></img>
          <div className="card-info-wrapper">
            <span className="card-info">Масть: {card?.suit}</span>
            <span className="card-info">{card?.arcana}</span>
            <span className="card-info">{card?.common_direct_meaning}</span>
            <Tags cardTags={card?.common_direct_meaning_tags}></Tags>
          </div>
        </div>
      </div>
      <div className="single-card">
        <span className="single-page-card-subtitle">Перевернутое значение</span>
        <div className="single-card-wrapper">
          <img
            src={card?.image_link}
            className="card-image inverted-card-image"
          ></img>
          <div className="card-info-wrapper">
            <span className="card-info">Масть: {card?.suit}</span>
            <span className="card-info">{card?.arcana}</span>
            <span className="card-info">{card?.common_inverted_meaning}</span>
            <Tags cardTags={card?.common_inverted_meaning_tags}></Tags>
          </div>
        </div>
      </div>
      <div className="single-card">
        <span className="single-page-card-subtitle">Любовное значение</span>
        <div className="single-card-wrapper">
          <img src={card?.image_link} className="card-image"></img>
          <div className="card-info-wrapper">
            <span className="card-info">Масть: {card?.suit}</span>
            <span className="card-info">{card?.arcana}</span>
            <span className="card-info">{card?.love_direct_meaning}</span>
            <Tags cardTags={card?.love_direct_meaning_tags}></Tags>
          </div>
        </div>
      </div>
      <div className="single-card">
        <span className="single-page-card-subtitle">
          Перевернутое любовное значение
        </span>
        <div className="single-card-wrapper">
          <img
            src={card?.image_link}
            className="card-image inverted-card-image"
          ></img>
          <div className="card-info-wrapper">
            <span className="card-info">Масть: {card?.suit}</span>
            <span className="card-info">{card?.arcana}</span>
            <span className="card-info">{card?.love_inverted_meaning}</span>
            <Tags cardTags={card?.love_inverted_meaning_tags}></Tags>
          </div>
        </div>
      </div>
      <div className="single-card">
        <span className="single-page-card-subtitle">Значение для карьеры</span>
        <div className="single-card-wrapper">
          <img src={card?.image_link} className="card-image"></img>
          <div className="card-info-wrapper">
            <span className="card-info">Масть: {card?.suit}</span>
            <span className="card-info">{card?.arcana}</span>
            <span className="card-info">{card?.career_direct_meaning}</span>
            <Tags cardTags={card?.career_direct_meaning_tags}></Tags>
          </div>
        </div>
      </div>
      <div className="single-card">
        <span className="single-page-card-subtitle">
          Перевернутое значение для карьеры
        </span>
        <div className="single-card-wrapper">
          <img
            src={card?.image_link}
            className="card-image inverted-card-image"
          ></img>
          <div className="card-info-wrapper">
            <span className="card-info">Масть: {card?.suit}</span>
            <span className="card-info">{card?.arcana}</span>
            <span className="card-info">{card?.career_inverted_meaning}</span>
            <Tags cardTags={card?.career_inverted_meaning_tags}></Tags>
          </div>
        </div>
      </div>
      <div className="single-card">
        <span className="single-page-card-subtitle">Значение для здоровья</span>
        <div className="single-card-wrapper">
          <img src={card?.image_link} className="card-image"></img>
          <div className="card-info-wrapper">
            <span className="card-info">Масть: {card?.suit}</span>
            <span className="card-info">{card?.arcana}</span>
            <span className="card-info">{card?.health_direct_meaning}</span>
            <Tags cardTags={card?.health_direct_meaning_tags}></Tags>
          </div>
        </div>
      </div>
      <div className="single-card">
        <span className="single-page-card-subtitle">
          Перевернутое значение для здоровья
        </span>
        <div className="single-card-wrapper">
          <img
            src={card?.image_link}
            className="card-image inverted-card-image"
          ></img>
          <div className="card-info-wrapper">
            <span className="card-info">Масть: {card?.suit}</span>
            <span className="card-info">{card?.arcana}</span>
            <span className="card-info">{card?.health_inverted_meaning}</span>
            <Tags cardTags={card?.health_inverted_meaning_tags}></Tags>
          </div>
        </div>
      </div>
    </div>
  );
}
