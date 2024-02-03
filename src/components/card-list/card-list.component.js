//import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

// make modifications when testing class component
const CardList = ({ monsters }) => (
	<div className='card-list'>
		{monsters.map((monster) => {
			return <Card monster={monster} />;
		})}
	</div>
);

export default CardList;