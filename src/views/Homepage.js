import './Homepage.css';
import { Link } from "react-router-dom";
import NavBar from "../components/nabvar/Nabvar"
import FilterNav from "../components/filternav/Filternav.jsx"

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
    </>
  );
}
export default Homepage;
