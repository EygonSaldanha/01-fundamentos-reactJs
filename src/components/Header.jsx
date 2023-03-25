import igniteLogo from "../assets/IgniteLogo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="LogotipoDoIgnite" />
      </header>
    </div>
  );
}
