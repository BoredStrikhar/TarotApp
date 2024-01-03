import { useEffect, useState } from "react";
import "./DivinatedCard.css";
import { ImageDivination } from "../ImageDivination/ImageDivination";
import { useAppSelector } from "../../redux/hooks";

type Card = {
  name?: string;
  name_en?: string;
  common_direct_meaning?: string;
  common_inverted_meaning?: string;
  love_direct_meaning?: string;
  love_inverted_meaning?: string;
  health_direct_meaning?: string;
  health_inverted_meaning?: string;
  career_direct_meaning?: string;
  career_inverted_meaning?: string;
  image_link: string;
};

export function DivinatedCard({ card }: { card: Card }) {
  const [isCardActive, setIsCardActive] = useState(false);

  const toggleDivOne = () => {
    setIsCardActive(true);
  };

  const divinationType = localStorage.getItem("divinationType");
  let meaning = card.career_direct_meaning;
  let isInverted = Math.round(Math.random());
  if (divinationType === "common") {
    if (isInverted === 0) {
      meaning = card.common_direct_meaning;
    } else {
      meaning = card.common_inverted_meaning;
    }
  } else if (divinationType === "love") {
    if (isInverted === 0) {
      meaning = card.love_direct_meaning;
    } else {
      meaning = card.love_inverted_meaning;
    }
  } else if (divinationType === "health") {
    if (isInverted === 0) {
      meaning = card.health_direct_meaning;
    } else {
      meaning = card.health_inverted_meaning;
    }
  } else if (divinationType === "career") {
    if (isInverted === 0) {
      meaning = card.career_direct_meaning;
    } else {
      meaning = card.career_inverted_meaning;
    }
  }
  return (
    <div className="divinated-card">
      <div className={`div-one`} onClick={toggleDivOne}>
        <ImageDivination
          link={card?.image_link}
          isInverted={isInverted ? "isInverted" : ""}
        ></ImageDivination>
      </div>
      <div
        className={`additional-info ${
          isCardActive ? "additional-info-active" : ""
        }`}
      >
        <h1>{card.name}</h1>
        <span className="additional-info-span">{meaning}</span>
      </div>
    </div>
  );
}
