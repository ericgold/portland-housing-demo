import React from 'react';

export default function HousingItem(props) {
	return (
		<li>
			<p>Neighborhood: {props.neighborhood}</p>
			<p>Size: {props.housing_size}</p>
			<p>Rent: {props.rent_amt}</p>
		</li>
	)
}