import "./Divination.css";
import { ReactComponent as Arrow } from "../../assets/pictures/arrow-right.svg";

type DivinationProps = {
  name: string;
  description: string;
  href: string;
  id: number;
};

export function Divination(props: DivinationProps) {
  let backgroundColor: string;
  let myId = (props.id) % 4;
  if (myId % 4 === 0) {
    backgroundColor = "#FFCC99";
  } else if (myId % 3 === 0) {
    backgroundColor = "#CCCCFF";
  } else if (myId % 2 === 0) {
    backgroundColor = "#CCFFCC";
  } else {
    backgroundColor = "#99CCFF";
  }
  return (
    <div className="divination">
      <a href={props.href} className="divination-item" style={{backgroundColor}}>
        <div className="divination-item-left">
          <span className="divination-item-title">{props.name}</span>
          <span className="divination-item-description">
            {props.description}
          </span>
        </div>
        <Arrow className="arrow-logo"></Arrow>
        <div className="divination-item-right"></div>
      </a>
    </div>
  );
}
