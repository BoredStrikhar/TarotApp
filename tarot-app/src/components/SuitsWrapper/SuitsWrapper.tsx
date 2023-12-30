import "./SuitsWrapper.css";
import { ReactComponent as ArcanaLogo } from "../../assets/pictures/arcanas.svg";
import { ReactComponent as WandLogo } from "../../assets/pictures/wands.svg";
import { ReactComponent as SwordLogo } from "../../assets/pictures/swords.svg";
import { ReactComponent as CupLogo } from "../../assets/pictures/cups.svg";
import { ReactComponent as PentacleLogo } from "../../assets/pictures/pentacles.svg";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSuit } from "../../redux/suits/suitsSlice";

export function SuitsWrapper() {
  const suit = useAppSelector((state) => state.suits.suit);
  const dispatch = useAppDispatch();
  return (
    <div className="cards-page">
      <div className="suits-wrapper">
        <button
          className="suit-item"
          onClick={() => {dispatch(setSuit("arcana"));}}
        >
          <ArcanaLogo className="suit-logo" />
          <span>Старшие Арканы</span>
        </button>
        <button
          className="suit-item"
          onClick={() => dispatch(setSuit("wands"))}
        >
          <WandLogo className="suit-logo" />
          <span>Жезлы</span>
        </button>
        <button
          className="suit-item"
          onClick={() => dispatch(setSuit("swords"))}
        >
          <SwordLogo className="suit-logo" />
          <span>Мечи</span>
        </button>
        <button className="suit-item" onClick={() => dispatch(setSuit("cups"))}>
          <CupLogo className="suit-logo" />
          <span>Чаши</span>
        </button>
        <button
          className="suit-item"
          onClick={() => dispatch(setSuit("pents"))}
        >
          <PentacleLogo className="suit-logo" />
          <span>Пентакли</span>
        </button>
      </div>
    </div>
  );
}
