import React from 'react';
import './DataCard.css';
import HousingList from './HousingList';
import HousingChart from './HousingChart';

export default class DataCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			urlBasis: "http://service.civicpdx.org/housing/rent/?page=1",
			inputHousingSize: "Studio",
			inputRentMax: 750
		};
		this.getData = this.getData.bind(this);
		this.updateSize = this.updateSize.bind(this);
		this.updateMaxRent = this.updateMaxRent.bind(this);
	}


	getData() {
		const { urlBasis, inputHousingSize, inputRentMax } = this.state;
		const url = `${urlBasis}&housing_size=${inputHousingSize}&rent_amt_lt=${inputRentMax}`;
		return fetch(url, {})
								 .then(response => response.json())
								 .then(jsonData => this.setState({ data: jsonData }))
								 .catch(error => console.log(error));
	}

	updateSize(e) {
		const size = e.target.value;
		this.setState({
			inputHousingSize: size
		});
		//this.getData();
	}

	updateMaxRent(e) {
		const rent = e.target.value;
		this.setState({
			inputRentMax: rent
		})
		//this.getData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.inputRentMax === this.state.inputRentMax) {
			return;
		}
	 	this.getData();
  }

	componentDidMount() { 
		this.getData();
	}

	render() {
		return (
			<div className="wrapper">
				<div className="controls">
					<h3>Set Criteria</h3>
					<label htmlFor="size">Size</label>
					<select name="size" id="size" onChange={this.updateSize} value={this.state.inputHousingSize}>
						<option value="Studio">Studio</option>
						<option value="1-BR">1 Bedroom</option>
						<option value="2-BR">2 Bedroom</option>
						<option value="3-BR">3 Bedroom</option>
					</select>
					<label htmlFor="max-rent">Max Rent</label><input type="number" name="max-rent" value={this.state.inputRentMax} onChange={this.updateMaxRent}/>
				</div>
				<div className="data-card">
					<HousingList data={this.state.data} />
				</div>
				<div className="data-card">
					<HousingChart data={this.state.data} />
				</div>

			</div>
			
		)
	}

}

