import React from "react";
import {store} from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/MainPage/MainPage";
import { CardsPage } from "./components/CardsPage/CardsPage";
import { SingleCardPage } from "./components/SingleCardPage/SingleCardPage";
import { DivinationPage } from "./components/DivinationPage/DivinationPage";
import { DayCardPage } from "./components/DayCardPage/DayCardPage";
import { PPFPage } from "./components/PPFPage/PPFPage";
import { CoursesPage } from "./components/CoursesPage/CoursesPage";
import { CourseBasic } from "./components/CourseBasic/CourseBasic";
import { QuizPage } from "./components/QuizPage/QuizPage";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/cards/:name_en" element={<SingleCardPage />} />
            <Route path="/gadanie" element={<DivinationPage />} />
            <Route path="/gadanie/karta-dnya" element={<DayCardPage />} />
            <Route path="/gadanie/past-present-future/" element={<PPFPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/basic" element={<CourseBasic />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
