import React from "react";
import RewritingNavigation from "../components/RewritingNavigation";
import Title from "../components/Title";

const MailingList = () => {
  return (
    <div>
      <RewritingNavigation />
      <div className="main">
        <Title title="Mailing list" />
      </div>
    </div>
  );
};

export default MailingList;
