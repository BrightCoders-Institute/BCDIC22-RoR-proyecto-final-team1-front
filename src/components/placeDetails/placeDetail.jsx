import "./placedetails.css";

export default function PlaceDetail({details}) {
  return (
    <div className="place-detail-flex">
      <h3 className="title-place">
        { details.place.name }
      </h3>
      <div className="details-container">
        <div className="details">
          <div className="detail-rating">
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
            <p className="text-content">4.98</p>
          </div>
          <div className="separador">
            <p>.</p>
          </div>
          <div className="evaluation-detail">
            <p className="text-evaluation">{details.reviews.length}{details.reviews.length === 1 ? ' review' : ' reviews'  }</p>
          </div>
          <div className="separador">
            <p>.</p>
          </div>
          <div className="detail-superhost">
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
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
            <p className="text-content">Super Anfitrión</p>
          </div>
          <div className="separador">
            <p>.</p>
          </div>
          <div className="text-countri">
            <p className="text-ubication text-underline">{details.place.city}, {details.place.state}, México</p>
          </div>
        </div>
        <div className="actions-items">
          <div className="action-share">
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
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
              />
            </svg>
            <p className="text-content text-underline">Compartir</p>
          </div>
          <div className="action-save">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="text-content text-underline">Guardar</p>
          </div>
        </div>
      </div>
      <div className="places-img">
        <div className="content-img-1 contain-img">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-542673782650460636/original/2920e6bd-d43d-464a-8f45-b2f5f28e2ea2.jpeg?im_w=960"
            alt=""
            className="card-img-1"
          />
        </div>
        <div className="content-img-2 contain-img">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-542673782650460636/original/f19bae04-4267-49d0-a7ca-b205c5883622.jpeg?im_w=720"
            alt=""
            className="card-img-2"
          />
        </div>
        <div className="content-img-3 contain-img">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-542673782650460636/original/f19bae04-4267-49d0-a7ca-b205c5883622.jpeg?im_w=720"
            alt=""
            className="card-img-3"
          />
        </div>
        <div className="content-img-4 contain-img">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-542673782650460636/original/afc3a522-ecd5-436c-a02a-137bd0971a25.jpeg?im_w=720"
            alt=""
            className="card-img-4"
          />
        </div>
        <div className="content-img-5 contain-img">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-542673782650460636/original/f19bae04-4267-49d0-a7ca-b205c5883622.jpeg?im_w=720"
            alt=""
            className="card-img-5"
          />
        </div>
      </div>
    </div>
  );
}
