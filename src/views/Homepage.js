import './Homepage.css';
import { Link } from "react-router-dom";
import NavBar from "../components/nabvar/Nabvar"
import Footer from "../components/footer/Footer"
import FilterNav from "../components/filternav/Filternav"
import Cards from "../components/Cards/index"
import SignUser from '../components/signuser/Signuser'

function Homepage() {
  return (
    <>
      <NavBar />
      <FilterNav />
      <Cards />
      <SignUser />
      <Footer />
    </>
  );
}
export default Homepage;
