import React from 'react';
import PropTypes from 'prop-types';
import './DataCard.css';
import HousingList from './HousingList';

export default class DataCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
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
					<select name="neighborhood" id="neighborhood">Neighborhood</select>
					<select name="size" id="size">Size</select>
					<input type="number" name="min-rent"/><label htmlFor="min-rent">Min Rent</label>
					<input type="number" name="max-rent"/><label htmlFor="max-rent">Max Rent</label>
				</div>
				<div className="data-card">
					<HousingList data={this.state.data}/>
				</div>
			</div>
			
		)
	}

}

