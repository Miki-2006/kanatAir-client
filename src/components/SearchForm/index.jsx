import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./form.module.css";
import CityInput from "./CityInput";
import PassengerSelect from "./PassengerSelect";
import Offers from "../../pages/main/Offers/Offers";
import search from "../../assets/imgs/gray-search-icon-button-transparent-png-701751694974939jhhv35ecko-removebg-preview.png";
import {
  fetchFlightsFailure,
  fetchFlightsStart,
  fetchFlightsSuccess,
} from "../../features/flights/flightsSlice";

const SearchForm = () => {
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [passenger, setPassenger] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [openPassengerWindow, setOpenPassengerWindow] = useState(false);

  const dispatch = useDispatch();
  const { flights } = useSelector((state) => state.flights);
  const location = useLocation();
  const navigate = useNavigate();

  const clickHandle = (e) => {
    if (e) e.preventDefault();
    navigate(`?from=${originCity}&to=${destinationCity}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const from = params.get("from");
    const to = params.get("to");
    if (from && to) {
      setOriginCity(from);
      setDestinationCity(to);
    }

    const fetchData = async () => {
      if (originCity && destinationCity) {
        dispatch(fetchFlightsStart());

        try {
          const res = await fetch("https://vercel.com/mirlans-projects/kanat-air-server/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              originCity,
              destinationCity,
              departureDate: departureDate.toISOString().split("T")[0],
              arrivalDate: arrivalDate.toISOString().split("T")[0],
              adults: passenger.adults,
              children: passenger.children,
              infants: passenger.infants,
            }),
          });

          const data = await res.json();
          dispatch(
            fetchFlightsSuccess(data.flights?.data?.offers || data.flights)
          );
        } catch (error) {
          dispatch(fetchFlightsFailure(error.message));
        }
      }
    };

    fetchData();
  }, [location.search]);

  const timeGenerator = (time) => {
    const fullDate = new Date(time);
    const hours = String(fullDate.getHours()).padStart(2, "0");
    const minutes = String(fullDate.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={clickHandle}>
        <div className={styles.top}>
          <CityInput
            value={originCity}
            onChange={setOriginCity}
            placeholder="Откуда"
            suggestionType="origin"
          />
          <CityInput
            value={destinationCity}
            onChange={setDestinationCity}
            placeholder="Куда"
            suggestionType="destination"
          />
          <DatePicker
            className={styles.departureDate}
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
          />
          <DatePicker
            className={styles.arrivalDate}
            selected={arrivalDate}
            onChange={(date) => setArrivalDate(date)}
          />
          <PassengerSelect
            passenger={passenger}
            setPassenger={setPassenger}
            open={openPassengerWindow}
            setOpen={setOpenPassengerWindow}
          />
        </div>
        <button className={styles.submitBtn} type="submit">
          Искать билеты
          <img src={search} alt="search" />
        </button>
      </form>
      <Offers offers={flights} timeGenerator={timeGenerator} />
    </div>
  );
};

export default SearchForm;
