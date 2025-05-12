import { useDispatch } from "react-redux";
import styles from "./card.module.css";
import { fetchFlightSuccess } from "../../features/flight/flightSlice";

const Card = ({ el, indx, timeGenerator }) => {
  const dispatch = useDispatch()



  return (
    <div className={styles.offer} key={indx} onClick={() => dispatch(fetchFlightSuccess(el))}>
      <div className={styles.aircompany}>
        <img className={styles.img} src={el.airlineInfo.logo} alt="logo_of_aircompany" />
        <h2>{el.airlineInfo.name}</h2>
      </div>
      <div className={styles.middle}>
        <div className={styles.times}>
          <span>
            {timeGenerator(el.itineraries[0].segments[0].departure.at)}
          </span>
          <span> - </span>
          <span>{timeGenerator(el.itineraries[0].segments[0].arrival.at)}</span>
        </div>
        <div className={styles.locations}>
          <span>
            {el.itineraries[0].segments[0].departure.iataCode}
          </span>
          <span>-</span>
          <span>{el.itineraries[0].segments[0].arrival.iataCode}</span>
        </div>
      </div>
      <div className={styles.price}>
        <span>{el.price.total}</span>
        <span>{el.price.currency}</span>
      </div>
    </div>
  );
};

export default Card;
