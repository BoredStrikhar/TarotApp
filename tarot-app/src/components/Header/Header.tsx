import "./Header.css";
import React from "react";
import { ReactComponent as HomeLogo } from "../../assets/pictures/home.svg";
import { ReactComponent as DivinationLogo } from "../../assets/pictures/divination.svg";
import { ReactComponent as QuizLogo } from "../../assets/pictures/quiz.svg";

import { ReactComponent as TarotLogo } from "../../assets/pictures/tarot.svg";
import { ReactComponent as CourseLogo } from "../../assets/pictures/course.svg";

export function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <a className="header-item" href="http://google.com">
          <TarotLogo className="logo" />
        </a>
        <a className="header-item" href="/gadanie">
          <span>Гадания</span>
        </a>
        <a className="header-item" href="http://google.com">
          <span>Викторина</span>
        </a>
        <a className="header-item" href="http://google.com">
          <span>Значения</span>
        </a>
        <a className="header-item" href="http://google.com">
          <span>Курсы</span>
        </a>
      </div>
    </div>
  );
}
