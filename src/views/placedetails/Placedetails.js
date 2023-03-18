import './Placedetails.css';
import NavBar from "../../components/nabvar/Nabvar"
import ScoreRating from "../../components/scorerating/ScoreRating"
import Reviews from "../../components/reviews/Reviews"
import Footer from "../../components/footer/Footer"
import Reserve from "../../components/reserve/reserve"
import Details from "../../components/details/Details"
import Gmap from "../../components/gmap/Gmap"

function Placedetails() {
  return (
    <>
      <NavBar />
      <Details />
      <Reserve />
      <ScoreRating />
      <Reviews />
      <Gmap />
      <Footer />
    </>
  );
}
export default Placedetails;
