import './Placedetails.css';
import NavBar from "../../components/nabvar/Nabvar"
import Footer from "../../components/footer/Footer"
import Details from "../../components/details/Details"
import PlaceDetails from '../../components/placeDetails/index';
function Placedetails() {
    return (
    <>
    <NavBar />
				<PlaceDetails />
        <Details />
    <Footer />    
    </>
    );
}
export default Placedetails;