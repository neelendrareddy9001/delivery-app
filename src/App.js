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

function App() {
  return (
    <>
      <div className="App">
        {/* Header Components */}
        <Header />

        {/* Main Components */}
        <main>
          <div className="mainContainer"></div>
          <div className="rightMenu"></div>
        </main>

        {/* Bottom Menu */}
        <div className="bottomMenu">
          <ul id="menu">
            {/* prettier ignore */}
            <MenuContainer link={"#"} icon={<HomeRounded />} />

            {/* prettier ignore */}
            <MenuContainer link={"#"} icon={<Chat />} />

            {/* prettier ignore */}
            <MenuContainer link={"#"} icon={<AccountBalanceRounded />} />

            {/* prettier ignore */}
            <MenuContainer link={"#"} icon={<Favorite />} />

            {/* prettier ignore */}
            <MenuContainer link={"#"} icon={<SummarizeRounded />} />

            {/* prettier ignore */}
            <MenuContainer link={"#"} icon={<Settings />} />

            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
