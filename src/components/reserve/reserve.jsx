import { useState, useEffect } from "react";
import "./reserve.css";

export default function Reserve({details}) {

  const ownerId = details.place.user.id
  const [userData, setUserData] = useState(null)
  const price = details.place.price_by_night;
  const priceWeek = (price * 7) * .8;

  //Funtion to get current user data
  useEffect(() => {
    async function fetchUserData() {
      const url = `https://earthbnd.onrender.com/users/users/${ownerId}`;
      const response = await fetch(url);
      const userData = await response.json();
      setUserData(userData);
      console.log(ownerId)
    }
    fetchUserData();
  }, [ownerId]);

  //Funcion for the reserve button
  const handleClick = () => {
    const url = `https://web.whatsapp.com/send?phone=${userData.phone_number}`;
    window.open(url, '_blank')
  }

  return (
    <div className="reserve-flex">
      <div className="price">
        <p
          className="p-price"
          style={{
            marginTop: "0.2rem",
            fontSize: "1rem",
            color: "var(--black)",
          }}
        >
          <span className="price-font" style={{ fontWeight: "600" }}>
            ${price} MXN x noche
          </span>{" "}
        </p>
      </div>
      <button className="button-reserve" type="submit" onClick={handleClick}>Reservar</button>
      <div className="reserve-button">
      </div>
      <div className="total-reserve">
        <div className="total">
          <p className='text-multi-day'>${priceWeek} MXN x 7 noches</p>
          <p className="text-total"><strong>Es un 20% de descuento!!!</strong></p>
        </div>
      </div>
    </div>
  );
}
