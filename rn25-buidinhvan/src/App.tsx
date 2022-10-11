import React, { Profiler } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./9-homeworks/Basic.css";
import "./9-homeworks/Block.css";
// import imgHouse from "./image/1.jpg";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import imageBasic1 from "./9-homeworks/Session02/basic-images/1.jpg";
import Basic1 from "./9-homeworks/Session02/Basic01";
import Basic2 from "./9-homeworks/Session02/Basic02";
import Basic3 from "./9-homeworks/Session02/Basic03";
import CharBar1 from "./9-homeworks/Session02/ChartBar1";
import Profile from "./9-homeworks/Session02/Profile";
import CocialBlock from "./9-homeworks/Session02/SocialBlock";
function App() {
  // let content = "đây là props";
  // let numberProps = 18;
  // let isLogin = false;

  // block-ui-1
  let dataRatings = [
    { name: "BANDWIDTH", color: "#E54D4C", value: 20 },
    { name: "STORAGE", color: "#2EB9CE", value: 50 },
    { name: "USERS", color: "#4AC25E", value: 70 },
    { name: "VISITORS", color: "#E9C318", value: 30 },
    { name: "EMAILS", color: "#BB70D5", value: 45 },
    { name: "BASIC", color: "#EB59D4", value: 80 },
    { name: "OTHERS", color: "#5892DB", value: 37 },
  ];

  // block-ui-2
  let proFile = [
    { icon: "", name: "HTML", color: "#51D567",follower:60},
    { icon: "", name: "CSS", color: "#F65354" ,follower:50},
    { icon: "", name: "PHP", color: "#34C8DF" ,follower:30},
    { icon: "", name: "JAVA", color: "#FFD700" ,follower:70}, 
    { icon: "", name: ".NET", color: "#BA55D3" ,follower:40},
  ];

  // block-ui-3
  let socialBlock = [
    {text: "Likes", color:"#619BEC", iconName:"Facebook", total:50},
    {text: "Tweets", color:"#31C8DD", iconName:"Twitter", total:40},
    {text: "Plus", color:"#F78153", iconName:"GooGle +", total:46},
    {text: "Pins", color:"#F75354", iconName:"Pinterest", total:34},
  ];
  return (
    <>
      {/* <header>
        <div className="header">
          <h1>The Pulpit Rock</h1>
        </div>
      </header> */}

      {/* cách truyền props trong class components */}
      {/* <Header
        contentProps={content}
        numberProps={numberProps}
        loginProps={isLogin}
      />
      <section>
        <nav>
          <ul className="rows">
            <li className="item">
              <a href="#">The Drive</a>
            </li>
            <li className="item">
              <a href="#">The Walk</a>
            </li>
            <li className="item">
              <a href="#">The Return</a>
            </li>
            <li className="item">
              <a href="#">The End</a>
            </li>
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
            <p>
              The Pulpit Rock is a part of a moutain that looks like a pulpit
            </p>
            <h1>Where?</h1>
            <p>The Pulpit Rock is in Norway</p>
            <h1>Price?</h1>
            <p>The walk is free!</p>
          </div>
        </aside>
      </section> */}
      {/* <footer>Resize the browser window to see how the content respond to the resizing.</footer> */}
      {/* <Footer contentFooterProps={content} numberFooterProps={numberProps} /> */}
      <h2>Bài tập bắt buộc</h2>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <Basic1 />
          </div>
          <div className="col-3">
            <Basic2 />
          </div>
          <div className="col-4">
            <Basic3 />
          </div>
        </div>
      </div>
      <hr />
      <h2>Bài tập luyện tập</h2>
      <h3>Bài block-ui-1</h3>
      <div>
        <CharBar1 data={dataRatings[0]} />
        <br />
        <CharBar1 data={dataRatings[1]} />
        <br />
        <CharBar1 data={dataRatings[2]} />
        <br />
        <CharBar1 data={dataRatings[3]} />
        <br />
        <CharBar1 data={dataRatings[4]} />
        <br />
        <CharBar1 data={dataRatings[5]} />
        <br />
        <CharBar1 data={dataRatings[6]} />
      </div>
      <hr />
      <h3>Bài block-ui-2</h3>
      <div>
        <Profile data = {proFile[0]}/>
        <br />
        <Profile data = {proFile[1]}/>
        <br />
        <Profile data = {proFile[2]}/>
        <br />
        <Profile data = {proFile[3]}/>
        <br />
        <Profile data = {proFile[4]}/>
      </div>

      <hr />
      <h3>Bài block-ui-3</h3>
        {/* <CocialBlock cocial1 ={socialBlock}/> */}
    </>
  );
}

export default App;
