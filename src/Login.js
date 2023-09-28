/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
function Login() {
  return (
    <div className="Login">
      {/*Spotify Logo */}
      {/*Button for spotify login */}
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="Logo"
      ></img>
      <a href={loginUrl}> LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
