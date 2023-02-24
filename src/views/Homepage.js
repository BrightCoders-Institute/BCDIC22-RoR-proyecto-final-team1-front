import './Homepage.css';
import { Link } from "react-router-dom";
import NavBar from "../components/Nabvar"

function Homepage() {
  return (
    <>
    <NavBar />
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
