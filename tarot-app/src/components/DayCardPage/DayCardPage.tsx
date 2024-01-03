import { useEffect, useState } from "react";
import "./DayCardPage.css";
import { ImageDivination } from "../ImageDivination/ImageDivination";

type Card = {
  name?: string;
  name_en?: string;
  common_direct_meaning?: string;
  common_inverted_meaning?: string;
  image_link: string;
};

export function DayCardPage() {
  const [card, setCard] = useState<Card>({
    image_link: "",
  });
  const [isCardActive, setIsCardActive] = useState(false);
  let isInverted: number = Math.round(Math.random());
  const toggleDivOne = () => {
    setIsCardActive(true);
  };

  useEffect(() => {
    const fetchCard = async () => {
      const response = await fetch(
        `http://localhost:8080/api/card/random?numOfCards=1`
      );
      const data = await response.json();
      setCard(data[0]);
    };
    fetchCard();
  }, []);

  return (
    <div className="day-card-page">
      <span className="day-card-title">
        Нажмите на карту, чтобы узнать свою судьбу
      </span>
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
        {isInverted === 1 ? (
          <span className="additional-info-span">
            {card.common_inverted_meaning}
          </span>
        ) : (
          <span className="additional-info-span">
            {card.common_direct_meaning}
          </span>
        )}
      </div>
      <a className="a-button" href="/gadanie">
        Назад
      </a>
    </div>
  );
}
