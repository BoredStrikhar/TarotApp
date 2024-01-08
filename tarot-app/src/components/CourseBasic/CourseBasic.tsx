import styles from "./CourseBasic.module.css";
import { ReactComponent as Arrow } from "../../assets/pictures/arrow-right.svg";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export function CourseBasic() {
   const scrollWithOffset = (el : Element) =>
     window.scrollTo({
       top: el.getBoundingClientRect().top + window.scrollY - 70,
       behavior: "smooth",
     });

  return (
    <div className={styles["course-wrapper"]}>
      <div className={styles["course"]}>
        <h1 className={styles["course-title"]}>Базовый курс: что такое Таро</h1>
        <div className={styles["course-inner-wrapper"]}>
          <div className={styles["course-body"]}>
            <span id="chapter-1" className={styles["course-inner-title"]}>
              Глава 1: Введение в Таро
            </span>
            <span id="history" className={styles["course-inner-text"]}>
              1.1 История Таро
            </span>
            <p className={styles["course-inner-text"]}>
              История Таро уходит корнями в древность и до сих пор остается
              загадкой. Возможно, что первые карты Таро появились в Египте или
              Индии, но точное происхождение остается неизвестным. Одна из самых
              распространенных теорий связывает Таро с древними египетскими
              мистериями и искусством чтения символов на стенах храмов. В другой
              теории утверждается, что карты Таро были созданы в средневековой
              Европе и использовались для игры в карты.
            </p>
            <span id="what-is-taro" className={styles["course-inner-text"]}>
              1.2 Что такое Таро?
            </span>
            <p className={styles["course-inner-text"]}>
              Таро - это колода карт, состоящая из 78 карт, разделенных на две
              группы: Мажорные арканы (22 карты) и Минорные арканы (56 карт).
              Каждая карта имеет свою уникальную символику и значение, которые
              используются для предсказания будущего, самопознания и руководства
              в принятии решений. Таро - это не просто набор карт, а система
              символов и архетипов, которые отражают различные аспекты
              человеческого опыта. Они могут помочь нам понять нашу жизнь,
              отношения, карму и развитие души.
            </p>
            <span
              id="how-does-taro-work"
              className={styles["course-inner-text"]}
            >
              1.3 Как работает Таро?
            </span>
            <p className={styles["course-inner-text"]}>
              Таро работает на основе принципа синхроничности, то есть идеи о
              том, что все в мире связано и взаимодействует друг с другом. Когда
              мы выбираем карты Таро и интерпретируем их символику, мы
              активируем нашу интуицию и подсознание, что позволяет нам получить
              информацию о нашей жизни и будущем.
            </p>
            <p className={styles["course-inner-text"]}>
              Чтобы работать с Таро, необходимо научиться читать и
              интерпретировать карты. Это включает в себя изучение значений
              каждой карты, их сочетаний и раскладов. Чтение Таро может быть как
              индивидуальным занятием, так и процессом консультации, где таролог
              использует карты для предсказания будущего или ответа на вопросы
              клиента.
            </p>
            <p className={styles["course-inner-text"]}>
              Важно понимать, что Таро не предсказывает будущее точно, а скорее
              предлагает возможные сценарии и направления развития событий. Оно
              помогает нам получить новые перспективы и понять свои собственные
              потребности и желания.
            </p>
            <p className={styles["course-inner-text"]}>
              В следующей главе мы рассмотрим основы Таро, включая структуру
              колоды и значение каждой карты.
            </p>
            <span id="chapter-2" className={styles["course-inner-title"]}>
              Глава 2: Основы Таро
            </span>
            <span id="structure" className={styles["course-inner-text"]}>
              2.1 Структура колоды Таро
            </span>
            <p className={styles["course-inner-text"]}>
              Колода Таро состоит из 78 карт, которые разделены на две группы:
              Мажорные арканы и Минорные арканы.
            </p>
            <p className={styles["course-inner-text"]}>
              Мажорные арканы состоят из 22 карт, которые обычно называются
              "ключами". Каждая карта имеет уникальное название и номер, начиная
              с 0 (Материализация) и заканчивая 21 (Мир). Карты Мажорных арканов
              представляют основные архетипы и символы, которые отражают
              ключевые этапы жизни и духовного развития.
            </p>
            <p className={styles["course-inner-text"]}>
              Минорные арканы состоят из 56 карт, которые подразделяются на
              четыре масти: пентакли (земля), кубки (вода), жезлы (огонь) и мечи
              (воздух). Каждая масть содержит 14 карт, включая четыре короля,
              четыре королевы, четыре рыцаря и четыре страницы. Карты Минорных
              арканов представляют более конкретные ситуации, эмоции и
              взаимодействия, которые мы можем испытывать в повседневной жизни.
            </p>
          </div>
          <div className={styles["course-contents"]}>
            <HashLink
              smooth
              className={styles["chapter"]}
              to="#chapter-1"
              scroll={(el) => scrollWithOffset(el)}
            >
              Глава 1: Введение в Таро
            </HashLink>
            <HashLink
              smooth
              className={styles["subchapter"]}
              to="#history"
              scroll={(el) => scrollWithOffset(el)}
            >
              1.1 История Таро
            </HashLink>
            <HashLink
              smooth
              className={styles["subchapter"]}
              to="#what-is-taro"
              scroll={(el) => scrollWithOffset(el)}
            >
              1.2 Что такое Таро?
            </HashLink>
            <HashLink
              smooth
              className={styles["subchapter"]}
              to="#how-does-taro-work"
              scroll={(el) => scrollWithOffset(el)}
            >
              1.3 Как работает Таро?
            </HashLink>
            <HashLink
              smooth
              className={styles["chapter"]}
              to="#chapter-2"
              scroll={(el) => scrollWithOffset(el)}
            >
              Глава 2: Основы Таро
            </HashLink>
            <HashLink
              smooth
              className={styles["subchapter"]}
              to="#structure"
              scroll={(el) => scrollWithOffset(el)}
            >
              2.1 Структура колоды Таро
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
