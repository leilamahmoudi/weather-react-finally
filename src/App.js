import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/leila-mahmoudi-96a417202/"
            target="-blank"
          >
            leila mahmoudi
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/leilamahmoudi/weather-react-finally"
            target="-blank"
          >
            {" "}
            GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
