import { useState } from "react"
import User from "../components/User"
import Footer from "../components/footer/Footer"
import FilterNav from "../components/filternav/Filternav"
import Cards from "../components/Cards/index"

import './Homepage.css';

function Homepage() {
  const [currUser, setCurrUser] = useState(null);
  return (
    <>
      <User currUser={currUser} setCurrUser={setCurrUser} />
      <FilterNav />
      <Cards />
      <Footer />
    </>
  );
}
export default Homepage;
