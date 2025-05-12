import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.text1}>Время путешествовать</h2>
          <h2 className={styles.text2}>– билет к мечте уже ждёт!</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
