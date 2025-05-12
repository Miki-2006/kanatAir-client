import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Payment from "./pages/Payment/Payment";
import Flight from "./components/Flight/Flight";
import Logo from "./components/Loaders/Logo/Logo.jsx";
import { useEffect } from "react";
import {
  setFinishLoading,
  setStartLoading,
} from "./features/loading/loadingSlice.js";
import styles from "./app.module.css";
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Banner from './pages/main/Banner/Banner.jsx'
import SearchForm from "./components/SearchForm/index.jsx";

const App = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStartLoading());
    setTimeout(() => {
      dispatch(setFinishLoading());
    }, 6000);
  }, [dispatch]);

  if (isLoading) return <Logo />;

  return (
    <>
      <div className={styles.hero}>
        <Header />
        <Banner />
      </div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="?from=departure&to=destination" element={<SearchForm/>} />
        </Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/flight/:id" element={<Flight />} />
      </Routes>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
};

export default App;
