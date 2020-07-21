import React from 'react';
import axios from 'axios';
import GameItem from './GameItem';
import FilterPlatform from "./FilterPlatform";
import FilterGenre from "./FilterGenre";
class MainScreen extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			token: "",
			games: []
		};
	}

	render() { 
		return  (
				<div id="content" className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"> 
					<header id="header_bar" className="masthead mb-auto">
						<h4 className="masthead brand" id="brand_title">Game Tracker</h4>
					</header>
					<br></br> 

					<main role="main" className="inner cover" id="main_screen" >
						<div id="info_screen">
							<h1 className="cover-heading" >Game Tracker</h1>
							<p className="lead">Mira informacion de tus juegos favoritos y explora un catalogo lleno de experiencias nuevas!</p>
							<p className="lead">Powered By: <a href="http://whatcha-playing.herokuapp.com">Whatcha Playing</a></p>
							<button id="explore_button" className="btn btn-dark" onClick={this.startPage}> Explorar! </button>
						</div>
						<div id="catalog" >
								<div className="navBar" id="filter_bar">
									<h5 id="filter_title">Filter By: </h5>	
									<FilterPlatform></FilterPlatform>
									<FilterGenre></FilterGenre>
								</div>
							
								<div className="row row-cols-1 row-cols-md-3" id="game_grid" > 
								{
									this.state.games.map((game) => {
										return <GameItem  game_id={game.id} key={game.id} game_name={game.game_name} genre={game.genre} platform={game.platform} cover_art_pic={game.cover_art_pic} auth_token={this.state.token} ></GameItem>
								}		
									)
								}
							</div>
						</div>
					</main>
					
					<br></br>
					<footer>
						<div className="inner" id="footer_text">
							<p>
								Aplicacion creada por Diego Orbe - Proyecto 3 Ing. Aplicaciones Web
							</p>	
						</div> 

					</footer>					
				</div>
				);
	}

	componentDidMount(){
		//Datos de Login
		const url_login = "https://whatcha-playing.herokuapp.com/api/auth/login";
		const body_data = {
			email : "MiUserNuevo@gmail.com",
			password:  "123456789",
			remember_me: false
		};
		var save_token = "";
		//Aca hago el login
		let promesa = axios.post(url_login,  body_data );

		promesa.then(res => {
		  save_token = "Bearer "+res.data.access_token;
		  this.setState({token: save_token});
		  document.getElementById("explore_button").style.visibility = "visible";

		});

	}

	startPage = () => {
		//limpio la pantalla y muestro juegos
		document.getElementById("info_screen").style.display = "none";
		document.getElementById("catalog").style.visibility = "visible";

		
		//Recupero los juegos de la api_rest
		const url_games = "https://whatcha-playing.herokuapp.com/api/games"
		const auth_data = this.state.token;

		
		let promesa_games = axios.get(url_games, {
  				headers: {
				'Authorization': auth_data
			}
		})
		//Para cada juego creo un componente
		promesa_games.then(response =>  {
			this.setState({
				games: response.data.games
			})
		})

	}
}	



 
export default MainScreen;