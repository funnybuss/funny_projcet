import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AboutePageAsync } from "./pages/AboutePage/AboutePage.lazy";
import { MainPageAsync } from "./pages/MainPage/MainPage.lazy";
import { useTheme } from "./theme/useTheme";

import "./styles/index.scss";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/aboute">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/aboute" element={<AboutePageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
