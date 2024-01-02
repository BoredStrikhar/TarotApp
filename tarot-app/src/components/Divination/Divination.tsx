import "./Divination.css";
import { ReactComponent as Arrow } from "../../assets/pictures/arrow-right.svg";
import { useState } from "react";
import { DivinationType } from "../DivinationType/DivinationType";

type DivinationProps = {
  name: string;
  description: string;
  href: string;
  id: number;
  types: string[];
};

export function Divination(props: DivinationProps) {
  let backgroundColor: string;
  let myId = props.id % 4;
  if (myId % 4 === 0) {
    backgroundColor = "#FFCC99";
  } else if (myId % 3 === 0) {
    backgroundColor = "#CCCCFF";
  } else if (myId % 2 === 0) {
    backgroundColor = "#CCFFCC";
  } else {
    backgroundColor = "#99CCFF";
  }
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  if (props.types[0] === "none") {
    return (
      <div className="divination">
        <a
          href={props.href}
          className="divination-item"
          style={{ backgroundColor }}
        >
          <div className="divination-item-inner-wrapper">
            <span className="divination-item-title">{props.name}</span>
            <span className="divination-item-description">
              {props.description}
            </span>
          </div>
          <Arrow className="arrow-logo"></Arrow>
        </a>
      </div>
    );
  } else {
    return (
      <div className="divination">
        <div
          className={`divination-item ${isPanelOpen ? "open" : ""}`}
          style={{ backgroundColor }}
          onClick={togglePanel}
        >
          <div className="divination-item-inner-wrapper">
            <span className="divination-item-title">{props.name}</span>
            <span className="divination-item-description">
              {props.description}
            </span>
          </div>
          <Arrow className="arrow-logo"></Arrow>
        </div>
        {isPanelOpen && (
          <div className="divination-item-additional">
            {props.types.map((e, id) => (
              <DivinationType name={e} id={id}></DivinationType>
            ))}
          </div>
        )}
      </div>
    );
  }
}
