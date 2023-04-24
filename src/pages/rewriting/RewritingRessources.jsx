import React from "react";
import RewritingNavigation from "../../components/RewritingNavigation";
import Title from "../../components/Title";
import Ressource from "../../components/Ressource";
import { NavLink } from "react-router-dom";
import Path from "../../components/Path";

const RewritingRessources = () => {
  //Paths
  const rewritingPath = {
    name: "Rewriting",
    path: "/rewriting",
  };

  const ressourcesPath = {
    name: "Ressources",
    path: "/rewriting/ressources",
  };

  const paths = [rewritingPath, ressourcesPath];

  return (
    <div className="rewriting-ressources-container">
      <RewritingNavigation />

      <div className="main">
        <Path paths={paths} />
        <Title title="Ressources" />

        <div className="ressources-cards-container">
          <NavLink to="/rewriting/ressources/learning-ressources">
            <Ressource
              ressourceTitle="Learning ressources"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum."
            />
          </NavLink>
          <NavLink to="/rewriting/ressources/external-ressources">
            <Ressource
              ressourceTitle="External ressources"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum."
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RewritingRessources;
