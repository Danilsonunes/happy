import React from "react";
import { FiArrowRight } from "react-icons/fi";

import "./styles/global.css";
import "./styles/pages/landing.css";

import logoIng from "./img/Logo.svg";

function App() {
  return (
    <div id="landing-page">
      <div className="content-wrapper">
        <img src={logoIng} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas criancas.</p>
        </main>

        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </div>
        <a href="/" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
