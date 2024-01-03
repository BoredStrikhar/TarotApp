import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import "./DivinationButton.css";
import { setDivinationType } from "../../redux/divinations/divinationsSlice";

type DivinationButtonProps = {
  name: string;
  id: number;
};
type DivinationType = "common" | "health" | "love" | "career";


export function DivinationButton(props: DivinationButtonProps) {
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
  const link: string = "gadanie/past-present-future/";
  let type: DivinationType = "common";
  const dispatch = useAppDispatch();
  if (props.name === "Общее") {
    type = "common";
  } else if (props.name === "На любовь") {
    type = "love";
  } else if (props.name === "На здоровье") {
    type = "health";
  } else if (props.name === "На карьеру") {
    type = "career";
  }

  return (
    <div className="divination-type">
      <a
        href={link}
        className="a-divination-type"
        style={{ backgroundColor }}
        onClick={() => {
          dispatch(setDivinationType(type));
          localStorage.setItem("divinationType", type);
        }}
      >
        {props.name}
      </a>
    </div>
  );
}
