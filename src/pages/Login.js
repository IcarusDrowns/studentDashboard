import React from "react";
import "../pages/Login.css";
import Input from "../components/Input";
export default function Login() {
  return (
    <div className="form">
      <div className="container">
        <div className="formcontainer">
          <h2 className="heading">MUJ EVENT PORTAL</h2>
          <form>
            <Input id="name" type="text"></Input>
            <Input id="email" type="email"></Input>
            <Input id="password" type="password"></Input>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
