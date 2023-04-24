import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import LambdaCalculusHome from "./pages/lambda-calculus/LambdaCalculusHome";
import RewritingHome from "./pages/rewriting/RewritingHome";
import RewritingSoftware from "./pages/rewriting/RewritingSoftware";
import MailingList from "./pages/MailingList";
import RewritingRessources from "./pages/rewriting/RewritingRessources";
import SplashPageNavigation from "./components/SplashPageNavigation";
import OpenProblems from "./pages/OpenProblems";
import LogicHome from "./pages/logic/LogicHome";
import Authors from "./pages/Authors";
import RewritingLearningRessources from "./pages/rewriting/ressources/RewritingLearningRessources";
import RewritingExternalRessources from "./pages/rewriting/ressources/RewritingExternalRessources";
import Books from "./pages/rewriting/ressources/learningressources/Books";
import Surveys from "./pages/rewriting/ressources/learningressources/Surveys";
import Courses from "./pages/rewriting/ressources/learningressources/Courses";
import IndustrialApplications from "./pages/IndustrialApplications";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/rewriting" element={<RewritingHome />} />
        <Route path="/lambda-calculus" element={<LambdaCalculusHome />} />
        <Route path="/logic" element={<LogicHome />} />
        <Route path="/mailing-list" element={<MailingList />} />
        <Route path="/open-problems" element={<OpenProblems />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/industrial-applications"
          element={<IndustrialApplications />}
        />

        <Route path="/rewriting/software" element={<RewritingSoftware />} />
        <Route path="/rewriting/mailing-list" element={<MailingList />} />
        <Route path="/rewriting/ressources" element={<RewritingRessources />} />
        <Route
          path="/rewriting/ressources/learning-ressources"
          element={<RewritingLearningRessources />}
        />
        <Route
          path="/rewriting/ressources/learning-ressources/books"
          element={<Books />}
        />
        <Route
          path="/rewriting/ressources/learning-ressources/surveys"
          element={<Surveys />}
        />
        <Route
          path="/rewriting/ressources/learning-ressources/courses"
          element={<Courses />}
        />
        <Route
          path="/rewriting/ressources/external-ressources"
          element={<RewritingExternalRessources />}
        />

        <Route path="/*" element={<SplashPageNavigation />} />
        <Route path="/rewriting/*" element={<RewritingHome />} />
        <Route path="/lambda-calculus/*" element={<LambdaCalculusHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
