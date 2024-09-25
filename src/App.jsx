import Styles from "./styles.module.css";

export default function App() {
  return (
    <div className={Styles.App}>
      <div className={Styles.topContainer}>
        <div className={Styles.GlobalContainer}>
          <span>=</span>Global Menu
        </div>
        <div className={Styles.HeaderContainer}>Header</div>
      </div>
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
