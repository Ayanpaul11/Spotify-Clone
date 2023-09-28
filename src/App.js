/* eslint-disable react/jsx-no-undef */
import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./Login.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  //runs the code in a given condition
  useEffect(() => {
    //code
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
    }

    console.log("I HAVE A TOKEN", token);
  }, [token]);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
