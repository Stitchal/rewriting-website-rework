import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import IntranetNavigation from "../../components/IntranetNavigation";
import { Navigate, useNavigate } from "react-router-dom";

const IntranetPage = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [redirectToLoginPage, setRedirectToLoginPage] = useState(false);
  // useEffect(() => {
  //   if (redirectToLoginPage) {
  //     alert("REDIRECTION : " + redirectToLoginPage);
  //     navigate("/login");
  //   }
  // }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    console.log("AVANT IF = loggedInUser = " + loggedInUser);
    if (loggedInUser === false) {
      console.log("APRES IF = loggedInUser = " + loggedInUser);
      alert("authentifié");
      setAuthenticated(loggedInUser);
    } else {
      alert("REDIRECTION : " + redirectToLoginPage);
      navigate("/login");
    }
  }, []);

  return (
    <div className="intranet-page">
      <IntranetNavigation />
      <div className="main">
        <Title title="Intranet" />
      </div>
      <Footer />
    </div>
  );
};

export default IntranetPage;
