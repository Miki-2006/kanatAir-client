import styles from "./offers.module.css";
import Card from "../../../components/Card/Card";
import LottieLoader from "../../../components/Loaders/Lottie/Lottie";
import { useDispatch, useSelector } from "react-redux";
import Flight from "../../../components/Flight/Flight";
import { setNotGetted } from "../../../features/flight/flightSlice";

const Offers = ({ offers, timeGenerator }) => {
  const isLoading = useSelector((state) => state.flights.loading);
  const isNotGetted = useSelector((state) => state.flights.isNotGetted);
  const isGetted = useSelector((state) => state.flight.isGetted);
  const dispatch = useDispatch()


  const handleClose = (e) => {
    if (e.target.classList.contains(styles.offerPage)) {
      dispatch(setNotGetted())
    }
  };


  return (
    <div className={styles.offers}>
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <LottieLoader className={styles.loader} />
        </div>
      ) : offers.length > 0 ? (
        offers.map((el, indx) => (
          <Card el={el} indx={indx} key={indx} timeGenerator={timeGenerator}/>
        ))
      ) : isNotGetted ? (
        <b>Не удалось найти рейсы!</b>
      ) : (
        ""
      )}
      {
        isGetted
        ?
        <div className={styles.offerPage} onClick={handleClose}>
          <Flight timeGenerator={timeGenerator}/>
        </div>
        :
        ''
      }
    </div>
  );
};

export default Offers;
