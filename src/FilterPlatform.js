import React from 'react';
import "./FilterPlatform.css";


class FilterPlatform extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  selected: "",
		  platform_list: [
			{familia: "Microsoft",
			plataformas: [
				"Xbox",
				"Xbox 360",
				"Xbox One"
			]
			},
			{familia: "Sony",
			plataformas: [
				"Playstation",
				"Playstation 2",
				"Playstation 3",
				"Playstation 4",
				"Playstation Portable"
			]
			},
			{familia: "Nintendo",
			plataformas: [
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
				"Nintendo Switch"
			]
			},
			{familia: "Mobile",
			plataformas: [
				"Android",
				"iOS"
			]
			},
			{familia: "Otros",
			plataformas: [
				"PC",
				"Sega Genesis",
				"Sega Dreamcast",
				"Arcade"
			]
			},


		  ]

		}
	  }

	  onInputChange = (event) => {
		
		this.setState({
			selected : event.target.value
		  },() => {this.sendData();
			//Aca pongo el llamado al padre
		
		});
		
	}
	sendData = () => {
		this.props.parentCallback(this.state.selected);
   	}


	render() { 
		return ( <div className="input-group mb-3" id="select_platform">
		<div className="input-group-prepend" id="input_description">
		  <label className="input-group-text" htmlFor="selectPlatform" id="input_description" >Plataforma</label>
		</div>
		<select className="custom-select" id="selectPlatform"  onChange={this.onInputChange}> 
		  <option value="">Todas</option>
		  {
			  this.state.platform_list.map((platform_family) =>
			  	{	
					return (
						<optgroup key={platform_family.familia} label={platform_family.familia}>
							{
								platform_family.plataformas.map((plataforma) => 
								{
									return <option key={plataforma} value={plataforma}>{plataforma}</option>
								})
							}
						</optgroup>
					);
				}
			  )
		  }
		</select>
	  </div> );
	}


}
 
export default FilterPlatform;