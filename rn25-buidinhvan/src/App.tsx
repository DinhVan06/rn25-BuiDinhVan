import React from "react";
import logo from "./logo.svg";
import "./App.css";
import imgHouse from "./image/1.jpg";

function App() {
  return (
    <div>
      <header>
        <div className="header">
          <h1>The Pulpit Rock</h1>
        </div>
      </header>
      <section>
        <nav>
          <ul className="rows">
            <li className="item"><a href="#">The Drive</a></li>
            <li className="item"><a href="#">The Walk</a></li>
            <li className="item"><a href="#">The Return</a></li>
            <li className="item"><a href="#">The End</a></li>
          </ul>
        </nav>
        <article>
          <div className="contain">
            <h1>The Walk</h1>
            <p>
              The walk to the Pulpit Rock will take you approximately two hours,
              give or take an hour depending on the weather conditions and youe
              physical shape
            </p>
            <div className="contain__image">
              <img src={imgHouse} alt="" />
            </div>
          </div>
        </article>
        <aside>
          <div className="aside">
            <h1>What?</h1>
            <p>The Pulpit Rock is a part of a moutain that looks like a pulpit</p>
            <h1>Where?</h1>
            <p>The Pulpit Rock is in Norway</p>
            <h1>Price?</h1>
            <p>The walk is free!</p>
          </div>
        </aside>
      </section>
      <footer>Resize the browser window to see how the content respond to the resizing.</footer>
    </div>
  );
}

export default App;
