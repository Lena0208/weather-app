import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      Weather App
      <footer>
        This project is {""}
        <a
          href="https://github.com/Lena0208/weatherApp-sheCodesPlus"
          target="_blank"
          rel="noreferrer"
          className="gitHubLink"
        >
          open-source coded
        </a>
        {""} by {""}
        <a
          href="https://www.linkedin.com/in/lena-berger-316849197/"
          target="_blank"
          rel="noreferrer"
          id="footerName"
        >
          Lena Berger
        </a>
      </footer>
    </div>
  );
}
