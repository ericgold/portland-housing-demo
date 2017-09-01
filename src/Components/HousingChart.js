import React from 'react';
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';

export default function HousingChart(props) {
	//const data = props.data;
	return (
		<div>
			<h2>Housing Chart</h2>
			<BarChart width={1200} height={400} data={props.data}>
				<YAxis dataKey="rent_amt" />
				<XAxis dataKey="neighborhood" />
				<Tooltip />
				<Legend />
				<Bar dataKey="rent_amt" fill="#000000" />
			</BarChart>
		</div>
	)
}

