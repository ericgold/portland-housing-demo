import React from 'react';
import './HousingList.css';

export default function HousingList(props) {
	
		return (
		<div className="housing-list">
			<h3>Housing List</h3>
			<ul>
				{props.data.map(unit => 
					<li>
						<p>Neighborhood: {unit.neighborhood}</p>
						<p>Size: {unit.housing_size}</p>
						<p>Rent: {unit.rent_amt}</p>
					</li>
				)}		
			</ul>
		</div>
		
	)
}

