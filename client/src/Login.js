import React from "react";
import { Container } from "react-bootstrap";
import TypeWriter from "./TypeWriter.js";
import "./Login.css";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=c2d5fd61e69a4817911bdefed5ea133a&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login({ Toggle, setToggle }) {
  return (
    <div className={Toggle ? `LoginPage` : `LoginPage-toggle`}>
      <h1 className="Heading">RAVERZZ</h1>

      <h1 className="Hub1">
        <TypeWriter>Songs are waiting .....</TypeWriter>
      </h1>

      <h1 className="Hub2">
        <TypeWriter>Kindly Login</TypeWriter>
      </h1>

      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Login With Spotify
        </a>
      </Container>
      <button
        title="Choose your mode"
        className={Toggle ? `Light-Toggling` : `Dark-Toggling`}
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          setToggle(!Toggle);
        }}
      >
        {Toggle ? `Light` : `Dark`}
      </button>
    </div>
  );
}
