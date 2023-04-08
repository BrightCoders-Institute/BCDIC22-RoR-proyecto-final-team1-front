import User from "../components/User"
import Footer from "../components/footer/Footer"
import FilterNav from "../components/filternav/Filternav"
import Cards from "../components/Cards/index"
import FutureView from "../components/futureview/FutureView"

import './Homepage.css';

const Homepage = () => {
  return (
    <>
      <User />
      <FilterNav />
      <Cards />
      <Footer />
      <FutureView />
    </>
  );
}
export default Homepage;
