import {
  AccountBalanceRounded,
  Chat,
  Favorite,
  FunctionsSharp,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import "./App.css";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import { useEffect } from "react";
import BannerName from "./components/BannerName";

import DeliveryAppp from "../src/assets/delivery-app.png";
function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu #menu-li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  return (
    <>
      <div className="App">
        {/* Header Components */}
        <Header />

        {/* Main Components */}
        <main>
          <div className="mainContainer">
            {/* BannerName */}
            <div className="banner">
              <BannerName name={"Neele"} discount={"20"} link={"#"} />
              <img src={DeliveryAppp} alt="" className="deliveryPic" />
            </div>
          </div>
          <div className="rightMenu"></div>
        </main>

        {/* Bottom Menu */}
        <div className="leftMenu">
          <ul id="menu">
            {/* prettier ignore */}
            <li id="menu-li">
              <MenuContainer link={"#"} icon={<HomeRounded />} />
            </li>

            {/* prettier ignore */}
            <li id="menu-li">
              <MenuContainer link={"#"} icon={<Chat />} />
            </li>

            {/* prettier ignore */}
            <li id="menu-li">
              <MenuContainer link={"#"} icon={<AccountBalanceRounded />} />
            </li>

            {/* prettier ignore */}
            <li id="menu-li">
              <MenuContainer link={"#"} icon={<Favorite />} />
            </li>

            {/* prettier ignore */}
            <li id="menu-li">
              <MenuContainer link={"#"} icon={<SummarizeRounded />} />
            </li>

            {/* prettier ignore */}
            <li id="menu-li">
              <MenuContainer link={"#"} icon={<Settings />} />
            </li>

            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
