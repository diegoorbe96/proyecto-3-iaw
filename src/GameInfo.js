import React from 'react';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
import ReviewItem from "./ReviewItem";
import "./GameInfo.css";



class GameInfo  extends React.Component {
	constructor(props) {
		super(props);
		this.handleModalShowHide = this.handleModalShowHide.bind(this);
		this.state = { 
			showHide : false,
			game_id: this.props.game_id,
			auth_token: this.props.auth_token,
			//Datos del juego:
			game_name: "",
			genre: "",
			platform: "",
			cover_art_pic: "",
			reviews: [],
			en_lista_pendiente: 0,
   			en_lista_jugando: 0,
   			en_lista_completado: 0,
    		promedio_reviews: ""
		 }
	}


	
	
	openModal = () => {
		//Hago la llamada a la Api, para recuperar la info del juego.
		const url_game = "https://whatcha-playing.herokuapp.com/api/games/"+this.state.game_id;

		let promesa_games = axios.get(url_game, {
			headers: {
		  'Authorization': this.state.auth_token
	  	}
		  })

		//Actualizo toda la info
		promesa_games.then(response => {
			let promedio = "Sin Reviews";
			
			if (response.data.promedio_reviews !== null){
				promedio = response.data.promedio_reviews.substring(0,3)+" Estrellas";
			}


			this.setState({
				game_name: response.data.game.game_name,
				genre: response.data.game.genre,
				platform: response.data.game.platform,
				cover_art_pic: response.data.game.cover_art_pic,
				reviews: response.data.reviews,
				en_lista_pendiente: response.data.en_lista_pendiente,
				en_lista_jugando: response.data.en_lista_jugando ,
				en_lista_completado: response.data.en_lista_completado,
				promedio_reviews: promedio
			});
		})  

		this.handleModalShowHide();
	};
		
	
	handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

	render(){
		return (<div>
					<Modal size="lg" show={this.state.showHide} onHide={this.handleModalShowHide}>
						<Modal.Header id="modal_header" closeButton onClick={() => this.handleModalShowHide()}>
							<Modal.Title>{this.state.game_name}</Modal.Title>
						</Modal.Header>
						<Modal.Body  id="modal_body">
						<div className="container">
							<div className="row">
								<div id="img_container" className="col-sm">
									<img id="game_img" src={'data:image/jpeg;base64,'+this.state.cover_art_pic} alt="" className="rounded"></img>
								</div>
								<div className="col-sm">
									<h5>Promedio Reviews: {this.state.promedio_reviews} </h5> 
									<h5>Plataforma: {this.state.platform}</h5>
									<h5>Genero: {this.state.genre}</h5>
								</div>
							</div>
							<div className="row">
									<h5>Estadisticas de jugadores:</h5>
							</div>
							<div className="row">
									<div className="col-sm" id="stats_panel">
										<p className="font-weight-bold">En lista de deseados</p>
										<p className="font-weight-bolder" style={{fontSize: 24}}>{this.state.en_lista_pendiente}</p>
									</div>
									<div className="col-sm" id="stats_panel">
										<p className="font-weight-bold">Jugando por</p>
										<p className="font-weight-bolder" style={{fontSize: 24}}>{this.state.en_lista_jugando}</p>
									</div>	
									<div className="col-sm" id="stats_panel">
										<p className="font-weight-bold">Completado por</p>
										<p className="font-weight-bolder" style={{fontSize: 24}}>{this.state.en_lista_completado}</p>
									</div>		
							</div>
							<div className="row">
									<h5>Reviews del juego:</h5>
							</div>
							<div className="row" id="review_container">
								{
									this.state.reviews.map(
										(review) =>
										{return  <ReviewItem key={review.name} username={review.name} profile_pic={review.profile_pic} description={review.description} score={review.score} upvotes={review.upvotes} ></ReviewItem> }

									)
								}
							</div>
						</div>
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