import "./reserve.css";
import { Link } from "react-router-dom";

export default function Reserve({details}) {

  const price = details.place.price_by_night;
  const priceWeek = (price * 7) * .8;

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
        <Link to={`/place`}>
          <span className="link-evaluation">1 review</span>
        </Link>
      </div>
      <div className="calender">
        <div className="c-llegada">
          <p className="p-llegada">LLEGADA</p>
          <input type="date" id="birthday" name="birthday"></input>
        </div>
        <div className="c-salida">
          <p className="p-salida">SALIDA</p>
          <input type="date" id="birthday" name="birthday"></input>
        </div>
      </div>
      <div className="huesped w-4/5 ml-10">
        <p className="text-huesped ">HÚESPEDES</p>
        <button className="button-huesped">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <button className="button-reserve" type="submit">Reservar</button>
      <div className="reserve-button">
      </div>
      <p>Aún no se te cobrara nada</p>
      <div className="total-reserve">
        <div className="total">
          <p className='text-multi-day'>${priceWeek} MXN x 7 noches</p>
          <p className="text-total"><strong>Es un 20% de descuento!!!</strong></p>
        </div>
        <div className="total-iva">
          <p className="text-total-iva"
            style={{
              marginTop: "0.2rem",
              fontSize: "1rem",
              color: "var(--black)",
              fontWeight: "600",
            }}
          >
            Total antes de impuestos
          </p>
          <p className='text-multi-day-iva'
            style={{
              marginTop: "0.2rem",
              fontSize: "1rem",
              color: "var(--black)",
              fontWeight: "600",
            }}
          >
            $126,000 MXN
          </p>
        </div>
      </div>
    </div>
  );
}
