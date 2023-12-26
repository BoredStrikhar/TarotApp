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
          <HomeLogo className="logo" />
          <span>Главная</span>
        </a>
        <a className="header-item" href="/gadanie">
          <DivinationLogo className="logo" />
          <span>Гадания</span>
        </a>
        <a className="header-item" href="http://google.com">
          <QuizLogo className="logo" />
          <span>Викторина</span>
        </a>
        <a className="header-item" href="http://google.com">
          <TarotLogo className="logo" />
          <span>Значения</span>
        </a>
        <a className="header-item" href="http://google.com">
          <CourseLogo className="logo" />
          <span>Курсы</span>
        </a>
      </div>
    </div>
  );
}
