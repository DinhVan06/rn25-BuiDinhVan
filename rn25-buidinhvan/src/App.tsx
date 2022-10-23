import React, { Profiler } from "react";
import logo from "./logo.svg";
import "./App.css";

// import imgHouse from "./image/1.jpg";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import imageBasic1 from "./9-homeworks/Session02/basic-images/1.jpg";

import BTNumber from "./components/example-12-10/BTNumber";
import BTNumberFuntionnal from "./components/example-12-10/BTNumberFuntionnal";
import State from "./components/example-12-10/index";
import Basic1 from "./9-homeworks/Session02/basic01/index";
import Basic2 from "./9-homeworks/Session02/basic02";
import Basic3 from "./9-homeworks/Session02/basic03";
import ChartBar from "./9-homeworks/Session02/block-ui-1/index";
import ProFile from "./9-homeworks/Session02/block-ui-2/index";
import Socialblock from "./9-homeworks/Session02/block-ui-3";
import Like from "./9-homeworks/Session3/LikeClassComponent/Like";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faFontAwesome,
  faPinterest,
  faAndroid,
  faApple,
  faPhp,
  faJava,
  faAdn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faVoicemail,
  faCartPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import ChartColumnProps from "./9-homeworks/Session02/block-ui-4";
import Person from "./9-homeworks/Session02/block-ui/Person";
import ProductUi from "./9-homeworks/Session02/block-ui-6/ProductUi";
import Resume from "./9-homeworks/Session02/Resume1/Resume";
import Practive from "./BT/Practive";
// import LikeNode from "./BT/Like";
import LikeNode from "./9-homeworks/Session05/Like";
import StarFuntion from "./9-homeworks/Session05/Star";
// import Star from "./BT/Star";
import Star from "./9-homeworks/Session3/StarClassComponent/Star";
import IndexBasic1 from "./9-homeworks/Session4/basic1/IndexBasic1";
import IndexBasic2 from "./9-homeworks/Session4/basic2/IndexBasic2";
import Rating from "./BT/Rating";
import PractiveForm from "./BT/Form/PractiveForm";
import MultipleIputForm from "./BT/Form/MultipleIputForm";
import LoginFormWithYup from "./9-homeworks/Session06/LoginFormWithYup";
import Login from "./BT/networking/Login";
import ShowData from "./9-homeworks/Session07/ShowData";
import Form from "./9-homeworks/Session07/Form"
function App() {
  library.add(
    faTwitter,
    faFontAwesome,
    faFacebookF,
    faGooglePlusG,
    faPinterest,
    faCalendarDays,
    faVoicemail,
    faCartPlus,
    faThumbsUp,
    faStar,
    faAndroid,
    faApple,
    faPhp,
    faJava,
    faAdn
  );

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
      {/* <h2>Bài tập bắt buộc</h2>
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
      <hr />
      <h3>Bài block-ui-3</h3> */}
      {/* <CocialBlock cocial1 ={socialBlock}/> */}

      {/* <hr />
        <div><BTNumber/></div> */}

      {/* <BTNumberFuntionnal/> */}
      {/* <State /> */}
      {/* <h3>Basic 1,2,3</h3>
      <Basic1 />
      <Basic2 />
      <Basic3 />

      <hr />
      <h3>Block-ui-1-ChartBar</h3>
      <ChartBar />
      <hr />
      <h3>Block-ui-2-Profile</h3>
      <ProFile />
      <hr />
      <h3>Block-ui-3-Socialblock</h3>
      <Socialblock />

      <hr />
      <h3>Block-ui-4-ChartCloumnProps</h3>
      <ChartColumnProps />

      <hr />
      <h3>Block-ui-5-Person</h3>
      <Person />

      <hr />
      <h3>Block-ui-6-product</h3>
      <ProductUi />
      <hr />
      <h3>Sesion03-Like-ClassComponent</h3>
      <Like />
      <hr />
      <h3>Session03-Star-ClassComponent</h3>
      <Star />
      <hr />
      <h3>Session05-Like</h3>
      <LikeNode icon="fa-regular fa-thumbs-up" />
      <hr />
      <h3>Session05-Star</h3>
      <StarFuntion /> */}
      {/* <hr />
      <Star/> */}
      {/* <hr />
      <h3>Resume 1</h3>
      <Resume/> */}
      {/* <Practive/> */}
      {/* <LikeNode icon="fa-regular fa-thumbs-up"/> */}
      {/* <Star/> */}
      {/* <IndexBasic1/> */}
      {/* <IndexBasic2/> */}
      {/* <Rating/> */}
      {/* <PractiveForm/> */}
      {/* <MultipleIputForm/> */}
      {/* <hr />
      <h3>Session6-form đăng nhập</h3>
      <LoginFormWithYup/>  */}
      {/* <Login/> */}
      {/* <hr />
      <h3>Sesion07 - ShowData</h3>
      <ShowData/> */}
      <Form/>
    </>
  );
}

export default App;
