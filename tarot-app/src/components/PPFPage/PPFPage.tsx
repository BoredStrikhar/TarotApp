import { useEffect, useState } from "react";
import "./PPFPage.css";
import { ImageDivination } from "../ImageDivination/ImageDivination";
import { useAppSelector } from "../../redux/hooks";
import { DivinatedCard } from "../DivinatedCard/DivinatedCard";

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

export function PPFPage() {
  const [cardOne, setCardOne] = useState<Card>({ image_link: "" });
  const [cardTwo, setCardTwo] = useState<Card>({ image_link: "" });
  const [cardThree, setCardThree] = useState<Card>({ image_link: "" });
  const [isCardActive, setIsCardActive] = useState(false);

  useEffect(() => {
    const fetchCard = async () => {
      const response = await fetch(
        `http://localhost:8080/api/card/random?numOfCards=3`
      );
      const data = await response.json();
      setCardOne(data[0]);
      console.log("cardOne = ", cardOne)
      setCardTwo(data[1]);
      console.log("cardTwo = ", cardTwo);
      setCardThree(data[2]);
      console.log("cardThree = ", cardThree);
    };

    fetchCard();
  }, []);

  const toggleDivOne = () => {
    setIsCardActive(true);
  };
  return (
    <div className="ppf-page">
      <div className="divinated-cards">
        <div className="divinated-card-wrapper">
          <span className="day-card-title">Прошлое</span>
          <DivinatedCard card={cardOne} />
        </div>
        <div className="divinated-card-wrapper">
          <span className="day-card-title">Настоящее</span>
          <DivinatedCard card={cardTwo} />
        </div>
        <div className="divinated-card-wrapper">
          <span className="day-card-title">Будущее</span>
          <DivinatedCard card={cardThree} />
        </div>
      </div>
      <a className="a-button" href="/gadanie">
        Назад
      </a>
    </div>
  );
}
