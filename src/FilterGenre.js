import React from 'react';
import "./FilterGenre.css";



class FilterGenre extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  selected: "",
			
		 genre_list: [
			 {
				 genre_family : "Action" ,
				 subgenres : [
					"Platformer",
					"First-person Shooter",
					"Third-person Shooter",
					"Top-down Shooter",
					"Beat'em Up",
					"Hack and Slash",
					"Fighting",
					"Stealth",
					"Survival"
				 ]
			 },
			 {
				genre_family : "Action-Adventure" ,
				subgenres : [
					"Survival Horror",
					"Metroidvania"
				]
			},
			{
				genre_family : "Adventure",
				subgenres : [
					"Text Adventure",
					"Point and Click",
					"Visual Novel",
					"Walking Simulator"
				]
			},
			{
				genre_family : "Role-playing Game",
				subgenres : [
					"J-RPG",
					"Action-RPG",
					"MMORPG",
					"Tactical-RPG"
				]
			},
			{
				genre_family : "Simulation" ,
				subgenres : [
					"Construction Sim",
					"Life Sim",
					"Vehicle Sim"
				]
			},
			{
				genre_family : "Strategy" ,
				subgenres : [
					"4X",
					"Real-time Strategy",
					"MOBA",
					"Tower Defense",
					"Grand Strategy"
				]
			},
			{
				genre_family : "Sports" ,
				subgenres : [
					"Racing"
				]
			},
			{
				genre_family : "Puzzle" ,
				subgenres : [
					"Trivia"
				]
			},
			{
				genre_family : "Otros" ,
				subgenres : [
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
		return ( <div className="input-group mb-3" id="select_genre">
		<div className="input-group-prepend" id="input_genre">
		  <label className="input-group-text" htmlFor="selectGenre" id="input_genre" >Genero</label>
		</div>
		<select className="custom-select" id="selectGenre"  onChange={this.onInputChange}>
		  <option value="">Todos</option>
		  {
			  this.state.genre_list.map((genre) =>
			  	{	
					return (
						<React.Fragment key={"fr"+genre.genre_family}>

						<option value={genre.genre_family} key={"padre"+genre.genre_family} >{genre.genre_family}</option>
						<optgroup key={genre.genre_family} label={"Subgeneros de "+genre.genre_family}>
							{
								genre.subgenres.map((genero) => 
								{
									return <option key={"Sub"+genero} value={genero}>{genero}</option>
								})
							}
						</optgroup>
						</React.Fragment>

					);
				}
			  )
		  }
		</select>
	  </div> );
	}
}
 
export default FilterGenre ;