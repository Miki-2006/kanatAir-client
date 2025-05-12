import styles from "./footer.module.css";
import logo from "../../assets/imgs/Wing_PNG-removebg-preview.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1 className={styles.title}>kanatAir</h1>
      </div>
      <div className={styles.middle}>
        <b className={styles.title}>Навигация</b>
        <ul className={styles.links}>
          <li>
            <a href="/about">О нас</a>
          </li>
          <li>
            <a href="/services">Услуги</a>
          </li>
          <li>
            <a href="/contact">Контакты</a>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <b className={styles.title}>Социальные сети</b>
        <ul className={styles.links}>
          <li>
            <a href="https://facebook.com" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
