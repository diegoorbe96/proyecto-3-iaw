import React from 'react';
import "./GameItem.css";
import GameInfo from './GameInfo';


class GameItem extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			auth_token: this.props.auth_token,
			game_id : this.props.game_id,
			name: this.props.game_name,
			genre: this.props.genre,
			platform: this.props.platform,
			img: this.props.cover_art_pic,
		}
	}

	


	render() { 
		return (
			<div>
				<div className="col mb-4">
				<div className="card">
					<img id="picture" className="card-img-top" src={'data:image/jpeg;base64,'+this.state.img} alt=""></img>	
					<h5 className="card-title">
						{this.state.name}
					</h5>
					<GameInfo game_id={this.state.game_id} auth_token={this.state.auth_token}>

					</GameInfo>
				</div>
				</div>
				
			</div>
			
			);
	}
}


export default GameItem;