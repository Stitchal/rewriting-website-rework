import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import LambdaCalculusMainPage from "./pages/lambda-calculus/LambdaCalculusMainPage";
import RewritingMainPage from "./pages/rewriting/RewritingMainPage";
import RewritingSoftwarePage from "./pages/rewriting/RewritingSoftwarePage";
import MailingListPage from "./pages/MailingListPage";
import RewritingRessourcesPage from "./pages/rewriting/RewritingRessourcesPage";
import SplashPageNavigation from "./components/SplashPageNavigation";
import OpenProblemsPage from "./pages/OpenProblemsPage";
import LogicMainPage from "./pages/logic/LogicMainPage";
import AuthorsPage from "./pages/AuthorsPage";
import RewritingLearningRessourcesPage from "./pages/rewriting/ressources/RewritingLearningRessourcesPage";
import RewritingExternalRessourcesPage from "./pages/rewriting/ressources/RewritingExternalRessourcesPage";
import RewritingBooksPage from "./pages/rewriting/ressources/learningressources/RewritingBooksPage";
import RewritingSurveysPage from "./pages/rewriting/ressources/learningressources/RewritingSurveysPage";
import RewritingCoursesPage from "./pages/rewriting/ressources/learningressources/RewritingCoursesPage";
import IndustrialApplicationsPage from "./pages/IndustrialApplicationsPage";
import LoginPage from "./pages/LoginPage";
import IntranetPage from "./pages/intranet/IntranetPage";
import IntranetWritePostPage from "./pages/intranet/IntranetWritePostPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/rewriting" element={<RewritingMainPage />} />
        <Route path="/lambda-calculus" element={<LambdaCalculusMainPage />} />
        <Route path="/logic" element={<LogicMainPage />} />
        <Route path="/mailing-list" element={<MailingListPage />} />
        <Route path="/open-problems" element={<OpenProblemsPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route
          path="/industrial-applications"
          element={<IndustrialApplicationsPage />}
        />
        <Route path="/intranet" element={<IntranetPage />} />
        <Route path="/intranet/write-post" element={<IntranetWritePostPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/rewriting/software" element={<RewritingSoftwarePage />} />
        <Route path="/rewriting/mailing-list" element={<MailingListPage />} />
        <Route
          path="/rewriting/ressources"
          element={<RewritingRessourcesPage />}
        />
        <Route
          path="/rewriting/ressources/learning-ressources"
          element={<RewritingLearningRessourcesPage />}
        />
        <Route
          path="/rewriting/ressources/learning-ressources/books"
          element={<RewritingBooksPage />}
        />
        <Route
          path="/rewriting/ressources/learning-ressources/surveys"
          element={<RewritingSurveysPage />}
        />
        <Route
          path="/rewriting/ressources/learning-ressources/courses"
          element={<RewritingCoursesPage />}
        />
        <Route
          path="/rewriting/ressources/external-ressources"
          element={<RewritingExternalRessourcesPage />}
        />

        <Route path="/*" element={<SplashPageNavigation />} />
        <Route path="/rewriting/*" element={<RewritingMainPage />} />
        <Route path="/lambda-calculus/*" element={<LambdaCalculusMainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
