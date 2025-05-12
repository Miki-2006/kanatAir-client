import "react-datepicker/dist/react-datepicker.css";
import SearchForm from "../../components/SearchForm";
import Popular from "./Popular/Popular";
import { Outlet } from "react-router-dom";



const Main = () => {


  return (
    <>
      <main>
        <SearchForm />
        <Popular/>
      </main>
      <Outlet/>
    </>
  );
};

export default Main;
