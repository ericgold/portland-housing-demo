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
				<div className="data-card">
					<h2>Sweet, Sweet, Data</h2>
					<HousingList data={this.state.data}/>
				</div>
			</div>
			
		)
	}

}

