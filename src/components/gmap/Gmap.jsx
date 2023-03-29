import './Gmap.css'; // main style file

export default function Gmap({details}) {
  const location = "https://maps.google.com/maps?q=" + details.latitude + "," + details.longitude + "&t=&z=15&ie=UTF8&iwloc=&output=embed"
  return (
    <div className='layout-mapa'>
      <h2 className='mb-5 font-bold text-2xl'>Donde vas a estar</h2>
      <iframe src={location}
        width="100%" height="450" title="gmap"
        allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
}