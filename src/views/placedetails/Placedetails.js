import './Placedetails.css';
import NavBar from "../../components/nabvar/Nabvar"
import ScoreRating from "../../components/scorerating/ScoreRating"
import Reviews from "../../components/reviews/Reviews"
import Footer from "../../components/footer/Footer"
import Details from "../../components/details/Details"
import Calendar from "../../components/calendar/Calendar"

function Placedetails() {
  return (
    <>
      <NavBar />
      <Calendar/>
      <Details />
      <ScoreRating />
      <Reviews />
      <Footer />
    </>
  );
}
export default Placedetails;
