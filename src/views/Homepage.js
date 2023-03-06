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
      <header className="App-header">
        <h1>
          Header
        </h1>
        <Link to={`/test`}>Ir a test</Link>
      </header>
      <Cards />
      <Footer />    
    </>
  );
}
export default Homepage;
