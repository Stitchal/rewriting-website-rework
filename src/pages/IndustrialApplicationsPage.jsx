import React from "react";
import Title from "../components/Title";
import Path from "../components/Path";
import IndustrialApplicationCard from "../components/IndustrialApplicationCard";
import Footer from "../components/Footer";

const IndustrialApplicationsPage = () => {
  const industrialApplicationPath = {
    name: "Industrial applications",
    path: "/rewriting-website-rework/industrial-applications",
  };

  const paths = [industrialApplicationPath];

  return (
    <div className="industrial-applications-page">
      <div className="main no-nav-bar">
        <Path paths={paths} />
        <Title title="Industrial applications" />

        <div className="industrial-applications-cards-container">
          <IndustrialApplicationCard
            title="Artificial Intelligence Ressources"
            url="https://www.zillman.us/subject-tracers/artificial-intelligence-resources/"
            tags={["Rewriting"]}
          />
          <IndustrialApplicationCard
            title="Artificial Intelligence Ressources"
            url="https://www.zillman.us/subject-tracers/artificial-intelligence-resources/"
            tags={["Rewriting", "Logic"]}
          />
          <IndustrialApplicationCard
            title="Artificial Intelligence Ressources"
            url="https://www.zillman.us/subject-tracers/artificial-intelligence-resources/"
            tags={["Rewriting", "Lambda Calculus"]}
          />
          <IndustrialApplicationCard
            title="Artificial Intelligence Ressources"
            url="https://www.zillman.us/subject-tracers/artificial-intelligence-resources/"
            tags={["Rewriting", "Lambda Calculus", "Logic"]}
          />
          <IndustrialApplicationCard
            title="Artificial Intelligence Ressources"
            url="https://www.zillman.us/subject-tracers/artificial-intelligence-resources/"
            tags={["Logic", "Lambda Calculus"]}
          />
          <IndustrialApplicationCard
            title="Artificial Intelligence Ressources"
            url="https://www.zillman.us/subject-tracers/artificial-intelligence-resources/"
            tags={["Rewriting"]}
          />
          <IndustrialApplicationCard
            title="Artificial Intelligence Ressources"
            url="https://www.zillman.us/subject-tracers/artificial-intelligence-resources/"
            tags={["Logic"]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndustrialApplicationsPage;
