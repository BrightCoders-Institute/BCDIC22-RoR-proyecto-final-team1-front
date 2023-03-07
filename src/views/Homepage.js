import './Homepage.css';
import { Link } from "react-router-dom";
import NavBar from "../components/nabvar/Nabvar"
import Footer from "../components/footer/Footer"
import FilterNav from "../components/filternav/Filternav.jsx"
import Cards from "../components/Cards/index"

function Homepage() {
  return (
    <>
    <NavBar />
    <FilterNav />
      <Cards />
      <Footer />    
    </>
  );
}
export default Homepage;
