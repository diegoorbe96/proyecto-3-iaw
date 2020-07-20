import React from 'react';
import "./FilterPlatform.css";


class FilterPlatform extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  selected: "",
		  platform_list: [
			"Android",
			"iOS",
			"Xbox",
			"Xbox 360",
			"Xbox One",
			"Playstation",
			"Playstation 2",
			"Playstation 3",
			"Playstation 4",
			"Playstation Portable",
			"Nintendo Entertainment System",
			"Super Nintendo Entertainment System",
			"Game Boy",
			"Game Boy Color",
			"Game Boy Advance",
			"Nintendo DS",
			"Nintendo 3DS",
			"Nintendo 64",
			"Nintendo GameCube",
			"Nintendo Wii",
			"Nintendo WiiU",
			"Nintendo Switch",
			"Sega Genesis",
			"Sega Dreamcast",
			"Arcade"
		  ]
		}
	  }


	render() { 
		return ( <div className="input-group mb-3" id="select_platform">
		<div className="input-group-prepend" id="input_description">
		  <label className="input-group-text" htmlFor="selectPlatform" id="input_description" >Plataforma</label>
		</div>
		<select className="custom-select" id="selectPlatform">
		  <option value="">Todas</option>
		  {
			  this.state.platform_list.map((platform) =>
			  	{	
					return <option value={platform} key={platform} >{platform}</option>;
				}
			  )
		  }
		</select>
	  </div> );
	}


}
 
export default FilterPlatform;