import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Form from './components/Form';
import RestaurantCard from './components/RestaurantCard';
import Map from './components/Map';
import categoryList from './components/CategoryList';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';

class App extends Component {
	state = {
		inputValue: '',
		restaurants: [],
		selectedCategoryId: '',
		cityCenterPosition: [52.22977, 21.01178],
		selectedRestaurant: '',
	};

	loadData() {
		const fourSquareUrl = 'https://api.foursquare.com/v2/venues/search?';
		const parameters = {
			client_id: 'IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E',
			client_secret: 'SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD',
			near: this.state.inputValue ? this.state.inputValue : 'Warsaw',
			categoryId: this.state.selectedCategoryId,
			limit: 100,
			v: 20200403,
		};
		console.log(fourSquareUrl + new URLSearchParams(parameters));
		fetch(fourSquareUrl + new URLSearchParams(parameters))
			.then((res) => res.json())
			.then((res) => {
				if (res.response.venues) {
					this.setState((prevState) => ({
						cityCenterPosition: [
							res.response.geocode.feature.geometry.center.lat,
							res.response.geocode.feature.geometry.center.lng,
						],
						restaurants: res.response.venues.map((el) => ({
							name: el.name,
							address: {
								street: el.location.formattedAddress[0],
								city: el.location.formattedAddress[1],
							},
							lat: el.location.lat,
							lng: el.location.lng,
							latLng: {
								lat: el.location.lat,
								lng: el.location.lng,
							},
							category:
								el === true
									? el.categories[0].name
									: '4bf58dd8d48988d110941735',
						})),
					}));
				} else {
					alert('Write a correct city name');
				}
			});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.loadData();
	};

	handleInputChange = (e) => {
		this.setState({
			inputValue: e.target.value,
		});
	};

	handleChangeCategory = (e) => {
		const element = categoryList
			.filter((el) => el.name === e.target.value)
			.map((el) => el.id)
			.join(', ');
		this.setState({
			selectedCategoryId: element,
		});
	};
	handleSelectRestaurant = (e) => {
		console.log(e.currentTarget.getAttribute('name'));

		// this.setState({
		//   selectedRestaurant: e.currentTarget.name,
		// })
	};

	// handleSelectMarker = (e) => {
	//   console.log(e.target.title);
	//   // this.setState({
	//   //   selectedRestaurant: e.target.options.title,
	//   // })
	// }

	render() {
		return (
			<>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<MainWrapper>
						<Title>
							Where do you want to go tonight in{' '}
							{this.state.inputValue ? this.state.inputValue : 'Warsaw'} ?
						</Title>
						<Menu>
							<Form
								onChangeCategory={this.handleChangeCategory}
								value={this.state.inputValue}
								change={this.handleInputChange}
								submit={this.handleSubmit}
							></Form>
							<RestaurantCard
								restaurantData={this.state.restaurants}
								onSelectRestaurant={this.handleSelectRestaurant}
							></RestaurantCard>
						</Menu>
						<Map
							cityCenterPosition={this.state.cityCenterPosition}
							restaurantData={this.state.restaurants}
							onSelectMarker={this.handleSelectMarker}
							selectedRestaurant={this.state.selectedRestaurant}
						></Map>
					</MainWrapper>
				</ThemeProvider>
			</>
		);
	}
}

const Title = styled.p`
	font-family: 'Ibarra Real Nova', serif;
	font-size: ${({ theme }) => theme.fontXl};
	text-align: left;
	z-index: 11;
`;
const Menu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: left;
	height: 70%;
	width: 60%;
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
	flex-direction: column;
	align-content: center;
	min-width: 850px;
	margin-left: 20px;
`

export default App;
