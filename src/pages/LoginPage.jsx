import React, { useState } from "react";
import Title from "../components/Title";
import axios from "axios";
import Footer from "../components/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    {
      try {
        await axios.post("http://localhost:3000", {
          email,
          password,
        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="login-page">
      <div className="main">
        <Title title="Login" />
        <form action="POST">
          <input
            type="email"
            name=""
            id=""
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            name=""
            id=""
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input type="submit" value="submit" onClick={submit} />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
