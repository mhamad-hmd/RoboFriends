import React, {Component} from "react"
import CardsList from '../Components/CardsList';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll';
import ErrorBoundry from "../Components/ErrorBoundry";

// first we made class to be able to use the state 
class App extends Component {
		constructor() {
			super()
			//created state with robots and searchfield 	
			this.state = {
				robots: [],
				searchfield: ''
		}
	}
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => {this.setState({robots:users})})
		
	}

	// created a method that gives searchfield the input value
	onSearchChange =(event)=>{
		this.setState({searchfield: event.target.value})
		}
		render() {
			// here we are filtering the robots counting on the searchfield value and we put all values to lowercase so we can compare easily
			const filterRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
			return !this.state.robots.length?
				<h1>Loading</h1>:
			(
				<div className = 'tc'>
					<h1 className= 'f1'>RoboFriends</h1>
				{/*we gave search box a property and its the method we created */}
					<SearchBox searchChange = {this.onSearchChange} />
				{/*we gave robots the filtered aray propety so we can display the filtered array*/}
				<Scroll>
					<ErrorBoundry>
						<CardsList robots = {filterRobots} />
					</ErrorBoundry>				
				</Scroll> 
				</div>	
			);
			}
		}
	

export default App;