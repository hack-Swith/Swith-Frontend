import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginMainPage from "../pages/LoginMainPage";
import MainPage from "../pages/MainPage";
import ReadRequestPage from "../pages/ReadRequestPage";
import StudentLoginPage from "../pages/StudentLoginPage";
import StudentRequestPage from "../pages/StudentRequestPage";
import StudentSafetyChecklistPage from "../pages/StudentSafetyChecklistPage";
import TeacherLoginPage from "../pages/TeacherLoginPage";
import WritingRequestPage from "../pages/WritingRequestPage";
import WritingSafetyChecklistPage from "../pages/WritingSafetyChecklistPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loginMain" element={<LoginMainPage />} />
        <Route path="/teacherLogin" element={<TeacherLoginPage />} />
        <Route path="/studentLogin" element={<StudentLoginPage />} />
        <Route path="/writingRequest" element={<WritingRequestPage />} />
        <Route path="/readRequest" element={<ReadRequestPage />} />
        <Route
          path="/studentSafetyChecklist"
          element={<StudentSafetyChecklistPage />}
        />
        <Route path="/studentRequest" element={<StudentRequestPage />} />
        <Route
          path="/writingSafetyChecklist"
          element={<WritingSafetyChecklistPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
