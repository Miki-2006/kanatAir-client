import styles from "./header.module.css";
import logo from '../../assets/imgs/Wing_PNG-removebg-preview.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <h1 className={styles.title}>kanatAir</h1>
        </div>
        <nav className={styles.nav}>
          <span>продукты</span>
          <span>о нас</span>
          <span>контакты</span>
          <span>забронировать</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
