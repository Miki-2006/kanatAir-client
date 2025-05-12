import { useState } from "react";
import styles from "./form.module.css";

const CityInput = ({ value, onChange, placeholder, suggestionType }) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (text) => {
    try {
      const response = await fetch(`https://kanat-air-server.vercel.app/suggestions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setSuggestions(data.suggestions || []);
    } catch (error) {
      console.error("Ошибка получения подсказок:", error);
    }
  };

  const handleInput = (e) => {
    const text = e.target.value;
    onChange(text);
    if (text.length > 1) {
      fetchSuggestions(text);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className={styles.locations}>
      <input
        value={value}
        type="text"
        className={styles.originCity}
        placeholder={placeholder}
        onChange={handleInput}
      />
      {suggestions.length > 0 && (
        <ul className={styles.suggestions}>
          {suggestions.map((el, i) => (
            <li
              key={i}
              onClick={() => {
                onChange(el.city);
                setSuggestions([]);
              }}
            >
              {el.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityInput;
