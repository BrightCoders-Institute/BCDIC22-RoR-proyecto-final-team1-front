import './Placedetails.css';
import NavBar from "../../components/nabvar/Nabvar"
import Details from "../../components/details/Details"
import Reserve from "../../components/reserve/reserve"
import ScoreRating from "../../components/scorerating/ScoreRating"
import Reviews from "../../components/reviews/Reviews"
import OwnerDetails from "../../components/ownerdetails/OwnerDetails"
import LastDetails from "../../components/lastdetails/LastDetails"
import Footer from "../../components/footer/Footer"

function Placedetails() {
  return (
    <>
      <NavBar />
      <Details />
      <Reserve />
      <ScoreRating />
      <Reviews />
      <OwnerDetails />
      <LastDetails />
      <Footer />
    </>
  );
}
export default Placedetails;
