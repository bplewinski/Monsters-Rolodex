//import { Component } from 'react';

import './search-box.styles.css';

// make modifications when testing class component
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
	<input
		className={`search-box ${className}`}
		type='search'    
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
)

export default SearchBox;