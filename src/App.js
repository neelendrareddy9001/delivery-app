import {
  AccountBalanceRounded,
  Chat,
  Favorite,
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
import SubMenuContainer from "./SubMenuContainer";
import MenuCard from "./components/MenuCard";
import { MenuItems } from "./components/Data";
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

          {/* dishContainer */}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="rightMenu"></div>
          </div>
          <div className="rowContainer"></div>
          <div className="dishitemContainer"></div>

          <div className="rightMenu"></div>
        </main>

        {/* Bottom Menu */}
        <div className="leftMenu">
          <ul id="menu">
            {/* prettier ignore */}
            <li id="menu-li">
              <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
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
