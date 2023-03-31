import { useEffect, useState } from 'react';
import { list } from '../../assets/cards-list';
import Card from './card'
import './card.css'

export default function Cards() {
	const [place, setPlace] = useState([]);

	const getApi = async () => {
		try {
			const res = await fetch('http://127.0.0.1:4000/place');
			const data = await res.json();

			console.log(data.results);

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