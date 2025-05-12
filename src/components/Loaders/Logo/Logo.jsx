import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./logo.module.css";
import logo from "../../../assets/imgs/Wing_PNG-removebg-preview.png";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 

const SlotLetter = ({ targetLetter }) => {
  const [displayLetter, setDisplayLetter] = useState("A");

  useEffect(() => {
    let interval = setInterval(() => {
      setDisplayLetter(LETTERS[Math.floor(Math.random() * LETTERS.length)]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setDisplayLetter(targetLetter); 
    }, 2000); 

    return () => clearInterval(interval);
  }, [targetLetter]);

  return (
    <motion.div
      key={displayLetter}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={styles.slot}
    >
      {displayLetter}
    </motion.div>
  );
};

const FadeInImage = ({ src, alt }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <>
      {show ? (
        <motion.img
          src={src}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={styles.logo} 
        />
      ) : (
        ""
      )}
    </>
  );
};

const Logo = () => {
  const [word, setWord] = useState("        ");

  useEffect(() => {
    const spin = () => {
      setWord("kanatAir");
    };
    spin();
  }, []);

  return (
    <div className={styles.casino}>
      <FadeInImage src={logo} alt={"logo"}/>
      <div className={styles.wordRow}>
        {word.split("").map((letter, index) => (
          <SlotLetter key={index} targetLetter={letter} />
        ))}
      </div>
    </div>
  );
};

export default Logo;
