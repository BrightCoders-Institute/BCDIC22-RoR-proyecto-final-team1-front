import { useLoaderData, useParams } from "react-router-dom"
import './Placedetails.css';
import NavBar from "../../components/nabvar/Nabvar"
import PlaceDetails from "../../components/placeDetails/placeDetail"
import Details from "../../components/details/Details"
import Calendar from "../../components/calendar/Calendar"
import ScoreRating from "../../components/scorerating/ScoreRating"
import Reviews from "../../components/reviews/Reviews"
import Gmap from "../../components/gmap/Gmap"
import OwnerDetails from "../../components/ownerdetails/OwnerDetails"
import LastDetails from "../../components/lastdetails/LastDetails"
import Footer from "../../components/footer/Footer"

export default function Placedetails() {
  const place = useLoaderData()
  return (
    <>
      <NavBar />
      <PlaceDetails />
      <Details /> 
      <Calendar />
      <ScoreRating />
      <Reviews />
      <Gmap />
      <OwnerDetails />
      <LastDetails />
      <Footer />
    </>
  );
}
