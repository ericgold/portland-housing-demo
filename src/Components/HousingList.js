import React from 'react';
import './HousingList.css';
import HousingItem from './HousingItem';

export default function HousingList(props) {
	
		return (
		<div className="housing-list">
			<h3>Housing List</h3>
			<ul>
				{props.data.map(unit => 
					<HousingItem 
						neighborhood={unit.neighborhood}
						size={unit.housing_size}
						rent={unit.rent_amt}
					/>
				)}		
			</ul>
		</div>
		
	)
}

