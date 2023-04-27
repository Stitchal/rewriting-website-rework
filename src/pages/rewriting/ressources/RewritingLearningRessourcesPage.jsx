import React from "react";
import RewritingNavigation from "../../../components/RewritingNavigation";
import Title from "../../../components/Title";
import Path from "../../../components/Path";
import { NavLink } from "react-router-dom";
import Ressource from "../../../components/Ressource";
import Footer from "../../../components/Footer";

const RewritingLearningRessourcesPage = () => {
  //Paths
  const rewritingPath = {
    name: "Rewriting",
    path: "/rewriting-website-rework/rewriting",
  };

  const ressourcesPath = {
    name: "Ressources",
    path: "/rewriting-website-rework/rewriting/ressources",
  };
  const learningRessourcesPath = {
    name: "Learning ressources",
    path: "/rewriting-website-rework/rewriting/ressources/learning-ressources",
  };

  const paths = [rewritingPath, ressourcesPath, learningRessourcesPath];

  return (
    <div className="rewriting-learning-ressources-page">
      <RewritingNavigation />
      <div className="main">
        <Path paths={paths} />
        <Title title="Learning Ressources" />
        <div className="ressources-cards-container">
          <NavLink to="/rewriting-website-rework/rewriting/ressources/learning-ressources/books">
            <Ressource
              ressourceTitle="Books"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum."
            />
          </NavLink>
          <NavLink to="/rewriting-website-rework/rewriting/ressources/learning-ressources/surveys">
            <Ressource
              ressourceTitle="Surveys"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum."
            />
          </NavLink>
          <NavLink to="/rewriting-website-rework/rewriting/ressources/learning-ressources/courses">
            <Ressource
              ressourceTitle="Courses"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum."
            />
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RewritingLearningRessourcesPage;
