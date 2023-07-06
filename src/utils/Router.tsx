import { BrowserRouter, Route, Routes } from "react-router-dom";
import FocusConsultationRequestPage from "../pages/FocusConsultationRequestPage";
import LoginMainPage from "../pages/LoginMainPage";
import MainPage from "../pages/MainPage";
import ReadRequestPage from "../pages/ReadRequestPage";
import ReadSafetyChecklistPage from "../pages/ReadSafetyChecklistPage";
import StudentLoginPage from "../pages/StudentLoginPage";
import StudentRequestPage from "../pages/StudentRequestPage";
import StudentSafetyChecklistPage from "../pages/StudentSafetyChecklistPage";
import TeacherLoginPage from "../pages/TeacherLoginPage";
import TeacherRequestPage from "../pages/TeacherRequestPage";
import TeacherSafetyChecklistPage from "../pages/TeacherSafetyChecklistPage";
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
        <Route
          path="/readSafetyChecklist"
          element={<ReadSafetyChecklistPage />}
        />
        <Route
          path="/focusConsultationRequest"
          element={<FocusConsultationRequestPage />}
        />
        <Route path="/teacherRequest" element={<TeacherRequestPage />} />
        <Route
          path="/teacherSafetyChecklist"
          element={<TeacherSafetyChecklistPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
