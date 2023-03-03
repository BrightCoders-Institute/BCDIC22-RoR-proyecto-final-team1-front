import { list } from '../../assets/cards-list';
import Card from './card'
import './card.css'

export default function Cards() {
	return (
		<div className="cards-flex">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
	)

}