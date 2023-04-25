import { useEffect, useState } from 'react';
import Card from './card'
import './card.css'

export default function Cards() {
  const [place, setPlace] = useState([]);

  const getApi = async () => {
    try {
      const res = await fetch('https://earthbnd.onrender.com/places');
      const data = await res.json();

      //console.log(data.results);
      setPlace(data)
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getApi();
  }, [])
  return (
    <div className="cards-flex">
      {place.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  )

}
