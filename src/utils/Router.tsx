import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginMainPage from "../pages/LoginMainPage";
import MainPage from "../pages/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loginMain" element={<LoginMainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
