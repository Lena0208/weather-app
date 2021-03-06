import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Freiburg im Breisgau" />
      </div>
      <footer>
        This project is {""}
        <a
          href="https://github.com/Lena0208/weather-app"
          target="_blank"
          rel="noreferrer"
          className="Link"
        >
          open-sourced on GitHub
        </a>
        {""} by {""}
        <a
          href="https://www.linkedin.com/in/lena-berger-316849197/"
          target="_blank"
          rel="noreferrer"
          className="Link"
        >
          Lena Berger
        </a>
      </footer>
    </div>
  );
}
