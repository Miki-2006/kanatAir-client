import { useSelector } from "react-redux";
import styles from "./flights.module.css";

const Flight = ({timeGenerator}) => {
  const el = useSelector((state) => state.flight.flight)

  const dateHandle = (isoDate) => {
    const date = new Date(isoDate)

     return date.toLocaleString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
  
  return (
    <div>
      <div className={styles.offer}>
        <div className={styles.aircompany}>
          <img
            className={styles.img}
            src={el.airlineInfo.logo}
            alt="logo_of_aircompany"
          />
          <h2>{el.airlineInfo.name}</h2>
        </div>
        <div className={styles.middle}>
          <div className={styles.times}>
            <span>
              {timeGenerator(el.itineraries[0].segments[0].departure.at)}
            </span>
            <span> - </span>
            <span>
              {timeGenerator(el.itineraries[0].segments[0].arrival.at)}
            </span>
          </div>
          <div className={styles.locations}>
            <span>{el.itineraries[0].segments[0].departure.iataCode}</span>
            <span>-</span>
            <span>{el.itineraries[0].segments[0].arrival.iataCode}</span>
          </div>
        </div>
        <div className={styles.price}>
          <span>{el.price.total}</span>
          <span>{el.price.currency}</span>
        </div>
      </div>
    </div>
  );
};

export default Flight;
