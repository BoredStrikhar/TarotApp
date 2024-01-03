import { useEffect, useState } from "react";
import "./ImageDivination.css";

export function ImageDivination({link, isInverted} : {link: string, isInverted: string}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardbackLink =
    "https://raw.githubusercontent.com/BoredStrikhar/Tarot-Image/master/tarot-img/card-back.jpg";

  const handleClick = () => {
    setIsFlipped(true);
  };
  return (
    <div className={`image-divination-wrapper ${isFlipped ? "flipped" : ""}`}>
      <div className="card">
        <img className="card-front" src={cardbackLink} onClick={handleClick} />
        <img
          className={`${
            isInverted ? "card-back-inverted" : "card-back"
          }`}
          src={link}
        />
      </div>
    </div>
  );
}
