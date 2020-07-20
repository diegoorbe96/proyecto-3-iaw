import React from 'react';
import "./FilterGenre.css";



class FilterGenre extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  selected: "",
		  genre_list: [
			"Action",
			"Platformer",
			"First-person Shooter",
			"Third-person Shooter",
			"Top-down Shooter",
			"Beat'em Up",
			"Hack and Slash",
			"Fighting",
			"Stealth",
			"Survival",
			"Action-Adventure",
			"Survival Horror",
			"Metroidvania",
			"Adventure",
			"Text Adventure",
			"Point and Click",
			"Visual Novel",
			"Walking Simulator",
			"Role-playing Game",
			"J-RPG",
			"Action-RPG",
			"MMORPG",
			"Tactical-RPG",
			"Simulation",
			"Construction Sim",
			"Life Sim",
			"Vehicle Sim",
			"Strategy",
			"4X",
			"Real-time Strategy",
			"MOBA",
			"Tower Defense",
			"Grand Strategy",
			"Sports",
			"Racing",
			"Puzzle",
			"Trivia",
			"Roguelike",
			"Idle Game",
			"Casual Game",
			"Party Game",
			"Trading Card Game",
			"Art",
			"Fitness",
			"Educational"
		  ]
		}
	  }




	  render() { 
		return ( <div className="input-group mb-3" id="select_genre">
		<div className="input-group-prepend" id="input_genre">
		  <label className="input-group-text" htmlFor="selectGenre" id="input_genre" >Genero</label>
		</div>
		<select className="custom-select" id="selectGenre">
		  <option value="">Todos</option>
		  {
			  this.state.genre_list.map((genre) =>
			  	{	
					return <option key={genre} value={genre}>{genre}</option>;
				}
			  )
		  }
		</select>
	  </div> );
	}
}
 
export default FilterGenre ;