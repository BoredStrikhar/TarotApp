import { Header } from "../Header/Header";
import "./MainPage.css";
import { ReactComponent as TarotLogo } from "../../assets/pictures/tarot.svg";

export function MainPage() {
  return (
    <div className="main">
      <Header></Header>
      <div className="title-block">
        <TarotLogo className="main-logo"></TarotLogo>
        <h1 className="h1-main">Таро Онлайн</h1>
        <span className="span-main">
          Откройте дверь в мир тайн и предсказаний и отправьтесь в магическое
          путешествие по разбору судьбы
        </span>
      </div>
      <div className="title-block">
        <TarotLogo className="main-logo"></TarotLogo>
        <h1 className="h1-main">Таро Онлайн</h1>
        <span className="span-main">
          Откройте дверь в мир тайн и предсказаний и отправьтесь в магическое
          путешествие по разбору судьбы
        </span>
      </div>
    </div>
  );
}
