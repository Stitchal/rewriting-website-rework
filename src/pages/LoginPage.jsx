import React, { useState } from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [authenticated, setAuthenticated] = useState(
  //   localStorage.getItem(localStorage.getItem("authenticated") || false)
  // );

  // localStorage.setItem("authenticated", false);
  const users = [{ username: "alexis", password: "mdp" }];
  localStorage.setItem("authenticated", false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);

      const userData = {
        username,
        password,
      };
      localStorage.setItem("token-info", JSON.stringify(userData));
      setUsername("");
      setUsername("");

      console.log("logedIn");
      console.log(JSON.stringify(userData));

      navigate("/intranet");
    } else {
      alert("identifiants incorrects");
    }
  };
  return (
    <div className="login-page">
      <div className="main">
        <Title title="Login" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
