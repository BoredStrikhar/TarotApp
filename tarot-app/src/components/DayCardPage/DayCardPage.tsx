import { useEffect, useState } from "react";
import "./DayCardPage.css";


type Card = {
  name: string;
  name_en: string;
  image_link: string;
};

export function DayCardPage() {
  const [card, setCard] = useState<Card>();
   const [isFlipped, setIsFlipped] = useState(false);
   const [imageSrc, setImageSrc] = useState(
     "https://raw.githubusercontent.com/BoredStrikhar/Tarot-Image/master/tarot-img/card-back.jpg"
   );

  useEffect(() => {
    const fetchCard = async () => {
      const response = await fetch(`http://localhost:8080/api/card/random`);
      const data = await response.json();
      setCard(data[0]);
    };

    fetchCard();
  }, []);

  const handleClick = () => {
    const url: string =
      card?.image_link ||
      "https://raw.githubusercontent.com/BoredStrikhar/Tarot-Image/master/tarot-img/card-back.jpg";
    setIsFlipped(true);
    setImageSrc(url);
  };

  console.log(card);
  return (
    <div className="day-card-page">
      <img
        className="card-image"
        src=""
      ></img>
      <span className="card-title">{card?.name}</span>
    </div>
  );
}
