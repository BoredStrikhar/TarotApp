import "./CardsPage.css";
import { SuitsWrapper } from "../SuitsWrapper/SuitsWrapper";
import { Cards } from "../Cards/Cards";

export function CardsPage() {
  return (
    <div className="cards-page">
      <SuitsWrapper/>
      <Cards>
      </Cards>
    </div>
  );
}
