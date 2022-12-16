import React from "react"
import ReactDOM from "react-dom/client"
import "./css/style.css"

import Details from "./components/details__component"
import Signup from "./components/signup__component"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="container">
      <Details />
      <Signup />
    </div>

    <div className="flag">
      Attribution
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1" target="_blank">
          Frontend Mentor
        </a>{" "}
        <br />
        Coded by <a href="https://Andr3sC0des.github.io">Andr3sC0des</a>.
      </div>
    </div>

  </React.StrictMode>
)


