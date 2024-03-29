import { useLoaderData } from "react-router-dom"

import User from "../../components/User"
import PlaceDetails from "../../components/placeDetails/placeDetail"
import Details from "../../components/details/Details"
import Calendar from "../../components/calendar/Calendar"
import ScoreRating from "../../components/scorerating/ScoreRating"
import Reviews from "../../components/reviews/Reviews"
import Gmap from "../../components/gmap/Gmap"
import OwnerDetails from "../../components/ownerdetails/OwnerDetails"
import LastDetails from "../../components/lastdetails/LastDetails"
import Footer from "../../components/footer/Footer"

import './Placedetails.css';

export default function Placedetails() {
  const place = useLoaderData()
  return (
    <>
      <User />
      <PlaceDetails details={place} />
      <Details details={place} />
      <Calendar details={place} />
      <ScoreRating details={place} />
      <Reviews details={place} />
      <Gmap details={place} />
      <OwnerDetails details={place} />
      <LastDetails />
      <Footer />
    </>
  );
}
