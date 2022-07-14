import React from 'react';

const SearchBox = ({searchfield,searchChange})=> {
	return(
		<div className = 'pa2'>
			<input 
			className = "pa3 ba b--green bg-lightest-blue"
			type='search'
			placeholder='Search Robots'
			// created a onclick event so when ever a change happen to the input box the function runs 
			onChange = {searchChange}
			/>
		</div>
		);
}

export default SearchBox;