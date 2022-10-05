import React from "react";
import logo from "./logo.svg";
import "./App.css";
import imgHouse from './image/1.png';

function App() {
  const MAX_NUMBER = 100;
  let nameCar = { name: "value" };
  let age_preson = 18;
  let styles = {
    color: "red",
    fontSize: 18,
  };
  return (
    <div>
      <header>
        <div className="header">
          <h1>
            The Pulpit Rock
          </h1>
        </div>
      </header>
      <section>
        <nav>
          <ul>
            <li>The Drive</li>
            <li>The Walk</li>
            <li>The Return</li>
            <li>The End</li>
          </ul>
        </nav>
        <article>
          <h1>The Walk</h1>
          <p>
            The walk to the Pulpit Rock will take you approximately two hours,
            give or take an hour depending on the weather conditions and youe
            physical shape
          </p>
          <img src={imgHouse} alt="" />
        </article>
        <aside>
          <h1>What?</h1>
          <p>The Pulpit Rock is a part of a moutain that looks like a pulpit</p>
          <h1>Where?</h1>
          <p>The Pulpit Rock is in Norway</p>
          <h1>Price?</h1>
          <p>The walk is free!</p>
        </aside>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
