import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginMainPage from "../pages/LoginMainPage";
import MainPage from "../pages/MainPage";
import StudentLoginPage from "../pages/StudentLoginPage";
import TeacherLoginPage from "../pages/TeacherLoginPage";
import WritingRequestPage from "../pages/WritingRequestPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loginMain" element={<LoginMainPage />} />
        <Route path="/teacherLogin" element={<TeacherLoginPage />} />
        <Route path="/studentLogin" element={<StudentLoginPage />} />
        <Route path="/writingRequest" element={<WritingRequestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
