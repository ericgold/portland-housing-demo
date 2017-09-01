import React from 'react';
import { BarChart } from 'recharts';

export default function HousingChart(props) {
	const data = props.data;
	return (
		<div>
			<h2>Housing Chart</h2>
			<BarChart width={600} height={400} data={data}>
			</BarChart>
		</div>
	)
}

