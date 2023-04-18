import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import LambdaCalculusHome from "./pages/lambda-calculus/LambdaCalculusHome";
import RewritingHome from "./pages/rewriting/RewritingHome";
import RewritingSystems from "./pages/rewriting/RewritingSystems";
import MailingList from "./pages/MailingList";
import RewritingRessources from "./pages/rewriting/RewritingRessources";
import SplashPageNavigation from "./components/SplashPageNavigation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/rewriting" element={<RewritingHome />} />
        <Route path="/lambda-calculus" element={<LambdaCalculusHome />} />
        <Route path="/rewriting/systems" element={<RewritingSystems />} />
        <Route path="/rewriting/mailing-list" element={<MailingList />} />
        <Route path="/rewriting/ressources" element={<RewritingRessources />} />
        <Route path="/*" element={<SplashPageNavigation />} />
        <Route path="/rewriting/*" element={<RewritingHome />} />
        <Route path="/lambda-calculus/*" element={<LambdaCalculusHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
