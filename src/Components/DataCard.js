import React from 'react';
import './DataCard.css';
import HousingList from './HousingList';

export default class DataCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			inputHousingSize: "Studio",
			inputRentMax: 750
		};
		this.getData = this.getData.bind(this);
	}

	getData(url) {
		return fetch(url, {})
								 .then(response => response.json())
								 .then(jsonData => this.setState({ data: jsonData }))
								 .catch(error => console.log(error));
	}

	componentDidMount() { 
		const url = `${this.props.url}`;
		this.getData(url);
	}

	render() {
		return (
			<div className="wrapper">
				<div className="controls">
					<select name="size" id="size">
					<option value="Studio">Studio</option>
					<option value="1-BR">1 Bedroom</option>
					<option value="2-BR">2 Bedroom</option>
					<option value="3-BR">3 Bedroom</option>
					</select>
					<label htmlFor="max-rent">Max Rent</label><input type="number" name="max-rent" value="750"/>
				</div>
				<div className="data-card">
					<HousingList data={this.state.data}/>
				</div>
			</div>
			
		)
	}

}

