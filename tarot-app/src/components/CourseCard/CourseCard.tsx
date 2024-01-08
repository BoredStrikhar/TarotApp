import "./CourseCard.css";
import { ReactComponent as Arrow } from "../../assets/pictures/arrow-right.svg";
import { useState } from "react";

type CourseCardProps = {
  name: string;
  description: string;
  href: string;
  id: number;
};

export function CourseCard(props: CourseCardProps) {
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

  return (
    <div className="course">
      <a href={props.href} className="course-item" style={{ backgroundColor }}>
        <div className="course-item-inner-wrapper">
          <span className="course-item-title">{props.name}</span>
          <span className="course-item-description">{props.description}</span>
        </div>
        <Arrow className="arrow-logo"></Arrow>
      </a>
    </div>
  );
}
