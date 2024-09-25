import { useState } from "react";
import Styles from "./styles.module.css";

export default function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className={Styles.App}>
      <div className={Styles.topContainer}>
        <div className={Styles.GlobalContainer}>
          <span
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
          >
            =
          </span>
          Global Menu
        </div>
        <div className={Styles.HeaderContainer}>Header</div>
      </div>
      <nav
        className={Styles.listContainer}
        style={{ display: menuToggle ? "block" : "" }}
      >
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </nav>
      <div className={Styles.HeaderContainer2}>Header</div>
      <div className={Styles.GlobalContainer2}>Global Menu</div>
      <div className={Styles.AdsContainer}>Ads</div>
      <div className={Styles.ContextContainer}>Context Menu</div>
      <div className={Styles.MainContainer}>Main Content</div>
      <div className={Styles.AdsContainer2}>Ads</div>
      <div className={Styles.FooterContainer}>Footer</div>
    </div>
  );
}
