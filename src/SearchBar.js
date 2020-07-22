import React from 'react';
import "./SearchBar.css";



class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.sendData = this.sendData.bind(this);
	}

	state = { 
		input_value : ""
	
	}

	onInputChange = (event) => {
		
		this.setState({
			input_value : event.target.value
		  },() => {this.sendData();
			//Aca pongo el llamado al padre
		
		});
		
	}

	sendData = () => {
		this.props.parentCallback(this.state.input_value);
   	}

	render() { 
		return ( 
				<div className="input-group mb-3" id="container_search_bar">
					<div className="input-group-prepend">
						<span className="input-group-text" id="side_desc">
						<img id="search_icon" src="https://www.iconsdb.com/icons/preview/dark-gray/search-3-xxl.png" alt=""></img>
						</span>
					</div>
					<input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" id="input_search" onChange={this.onInputChange}></input>				
				</div>

		 );
	}
}
 
export default SearchBar;