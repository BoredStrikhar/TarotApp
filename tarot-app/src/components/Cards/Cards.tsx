import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import { useAppSelector } from "../../redux/hooks";
import { CardsList } from "../CardList/CardsList";

type Card = {
  name: string;
  image_link: string;
};

export function Cards() {
  const suit = useAppSelector((state) => state.suits.suit);

  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {

    const fetchCards = async () => {
      const response = await fetch(
        `http://localhost:8080/api/card/suit?suit_en=${suit}`
      );
      const data = await response.json();
      setCards(data);
    };

    fetchCards();
  }, [suit]);

  return (
    <div className="cards">
      <div className={styles["cards-wrapper"]}>
        <CardsList cards={cards} />
      </div>
    </div>
  );
}
