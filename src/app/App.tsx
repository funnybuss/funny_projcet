import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AboutePage } from "pages/AboutePage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "./providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/aboute">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/aboute" element={<AboutePage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
