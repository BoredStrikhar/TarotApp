import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import "./DivinationType.css";
import { setDivinationType } from "../../redux/divinations/divinationsSlice";

type DivinationTypeProps = {
  name: string;
  id: number;
};

export function DivinationType(props: DivinationTypeProps) {
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
  const link: string = "/past-present-future/";
  let type: string = "common";
  const dispatch = useAppDispatch();
  if (props.name === "Общее") {
    dispatch(setDivinationType("common"));
  } else if (props.name === "На любовь") {
    dispatch(setDivinationType("love"));
  } else if (props.name === "На здоровье") {
    dispatch(setDivinationType("health"));
  } else if (props.name === "На карьеру") {
    dispatch(setDivinationType("career"));
  }

  return (
    <div className="divination-type">
      <a href={link} className="a-divination-type" style={{ backgroundColor }}>
        {props.name}
      </a>
    </div>
  );
}
