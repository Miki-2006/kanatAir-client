import { useNavigate } from "react-router-dom";
import styles from "./popular.module.css";

const Popular = () => {
  const navigate = useNavigate();
  const popularOffers = [
    {
      destinationCity: "Jakarta",
      destinationIata: "CGK",
      departureCity: "New York",
      departureIata: "JFK",
      image:
        "https://i.pinimg.com/736x/69/f4/5e/69f45ec73b74ab674200def5deb3b593.jpg",
    },
    {
      destinationCity: "Samarkand",
      destinationIata: "SKD",
      departureCity: "London",
      departureIata: "LHR",
      image:
        "https://i.pinimg.com/736x/37/78/79/3778793221266326238af40273128dc9.jpg",
    },
    {
      destinationCity: "Ulaanbaatar",
      destinationIata: "UBN",
      departureCity: "Berlin",
      departureIata: "BER",
      image:
        "https://i.pinimg.com/736x/fd/6b/ef/fd6befc46828067d81da365b333b9d72.jpg",
    },
    {
      destinationCity: "Beijing",
      destinationIata: "PEK",
      departureCity: "Los Angeles",
      departureIata: "LAX",
      image:
        "https://i.pinimg.com/736x/5f/11/4f/5f114fb6c6d7a48f4415f492316fd9a5.jpg",
    },
    {
      destinationCity: "Rio de Janeiro",
      destinationIata: "GIG",
      departureCity: "Paris",
      departureIata: "CDG",
      image:
        "https://i.pinimg.com/736x/dc/d1/49/dcd1491147a36b88b96def13e90e0eba.jpg",
    },
    {
      destinationCity: "Sydney",
      destinationIata: "SYD",
      departureCity: "Dubai",
      departureIata: "DXB",
      image:
        "https://i.pinimg.com/736x/36/ca/09/36ca0964c73edf463c7c12ba6a12bfb4.jpg",
    },
  ];

  const handleClick = (data) => {
    navigate(`/?from=${data.departureCity}&to=${data.destinationCity}`);
  };

  return (
    <div className={styles.popularOffers}>
      <b className={styles.title}>Популярные направления</b>
      <div className={styles.offers}>
        {popularOffers.map((el, indx) => (
          <div
            className={styles.offer}
            key={indx}
            onClick={() => handleClick(el)}
          >
            <img className={styles.img} src={el.image} alt={el.destinationCity} />
            <span className={styles.destination}>{el.destinationCity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
