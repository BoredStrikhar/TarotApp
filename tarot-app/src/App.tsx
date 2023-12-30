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
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
