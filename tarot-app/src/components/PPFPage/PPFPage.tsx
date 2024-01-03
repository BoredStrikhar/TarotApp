import { useEffect, useState } from "react";
import "./PPFPage.css";
import { ImageDivination } from "../ImageDivination/ImageDivination";
import { useAppSelector } from "../../redux/hooks";

type Card = {
  name?: string;
  name_en?: string;
  common_direct_meaning?: string;
  image_link: string;
};

export function PPFPage() {
  const divination = useAppSelector((state) => state.divinations.divination);
  console.log("you = ", divination)
  const [card, setCard] = useState<Card>({ image_link: "" });
  const [isCardActive, setIsCardActive] = useState(false);

  useEffect(() => {
    const fetchCard = async () => {
      const response = await fetch(`http://localhost:8080/api/card/random`);
      const data = await response.json();
      setCard(data[0]);
    };

    fetchCard();
  }, []);

  const toggleDivOne = () => {
    setIsCardActive(true);
  };
  return (
    <div className="day-card-page">
      <span className="day-card-title">
        Нажмите на карту, чтобы узнать свою судьбу
      </span>
      <div className={`div-one`} onClick={toggleDivOne}>
        <ImageDivination link={card?.image_link}></ImageDivination>
      </div>
      <div
        className={`additional-info ${
          isCardActive ? "additional-info-active" : ""
        }`}
      >
        <h1>{card.name}</h1>
        <span className="additional-info-span">
          {card.common_direct_meaning}
        </span>
      </div>
      <a className="a-button" href="/gadanie">
        Назад
      </a>
    </div>
  );
}
