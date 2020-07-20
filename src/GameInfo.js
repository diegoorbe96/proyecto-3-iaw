import React from 'react';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';



class GameInfo  extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			showHide : false,
			game_id: this.props.game_id,
			auth_token: this.props.auth_token
			//Datos del juego!
			
		 }
	}

	
	
	openModal = () => {
		//Hago la llamada a la Api, para recuperar la info del juego.
		const url_game = "https://whatcha-playing.herokuapp.com/api/games/"+this.state.game_id;

		console.log(this.state.auth_token);

		let promesa_games = axios.get(url_game, {
			headers: {
		  'Authorization': this.state.auth_token
	  	}
		  })

		//Actualizo toda la info
		promesa_games.then(response => {

			console.log(this.state);
		})  

		this.handleModalShowHide();
	};
	
	handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

	render(){
		return (<div>
					<Modal show={this.state.showHide}>
						<Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
							<Modal.Title></Modal.Title>
						</Modal.Header>
						<Modal.Body>


						</Modal.Body>
                	</Modal>					

					<button type="button" className="btn btn-dark" onClick={() => this.openModal()} >
          				Ver detalles
        			</button>
				</div>
				);
		}


}
 
export default GameInfo;