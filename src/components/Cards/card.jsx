import { Link } from "react-router-dom";
import "./card.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Card({ card }) {
  return (
    <div className="card-box">
      <Link to={`/place/${card.id}`}>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lpibo-ew-1656015868.jpg"
          alt="" className="card-img" />

        <div className="card-info-flex">
          <h3 className="card-title">{card.name}</h3>
          <div className="card-rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <p>4</p>
          </div>
        </div>
        <p style={{ marginTop: 0 }}>{card.description}</p>
        <p style={{ marginTop: 0 }}>15-20 May</p>
        <p
          style={{ marginTop: "0.2rem", fontSize: "1rem", color: "var(--black)" }}
        >
          <span style={{ fontWeight: "600" }}>${card.price_by_night}</span> night
        </p>
      </Link>
    </div>
  );
}
