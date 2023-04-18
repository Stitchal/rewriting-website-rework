import React from "react";
import RewritingNavigation from "../../components/RewritingNavigation";
import Title from "../../components/Title";
import Section from "../../components/Section";

const RewritingHome = () => {
  const titles = ["What is rewriting?"];
  const contents = [
    "Rewriting is a computational model used in computer science, algebra, mathematical logic and linguistics consisting in applying specific rules (rewriting system) to transform objects. These objects can be words, terms, lambda-terms, programs, proofs, graphs and many others... Rewriting is a powerful method for dealing with equations. The theory of rewriting centers around the concept of normal form, an expression that cannot be rewritten any further.",
  ];

  return (
    <div>
      <RewritingNavigation />
      <div className="main">
        <Title title="Home" />
        <Section title={titles[0]} content={contents[0]} />
      </div>
    </div>
  );
};

export default RewritingHome;
