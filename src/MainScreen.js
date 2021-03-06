import React from 'react';
import axios from 'axios';
import GameItem from './GameItem';
import FilterPlatform from "./FilterPlatform";
import FilterGenre from "./FilterGenre";
import LoadingSpinner from './Spinner';
import SearchBar from './SearchBar';
class MainScreen extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			search_data: "",
			genre_selected: "",
			platform_selected: "",
			loading: false,
			token: "",
			games: []
		};
		this.filterByName = this.filterByName.bind(this);
	}

	onSearchData = (data) => {
		this.setState({search_data: data},() => {console.log("Busqueda")});
	}
	onPlatformSelected = (data) => {
		this.setState({platform_selected: data},() => {console.log("Plataforma")});
	}
	onGenreSelected = (data) => {
		this.setState({genre_selected: data},() => {console.log("Genero")});
	}


	//Aca filtro por nombre, seguro reuso parte del metodo para platform y genre
	filterByName = () => {
		//Busco por nombre
		const filteredGames = this.state.games.filter((game) => {
			return game.game_name.toLowerCase().includes(this.state.search_data.toLowerCase());
		})
		//Busco por genero
		.filter((game) => {
			//return (game.genre.toLowerCase() === this.state.genre_selected.toLowerCase());
			return this.filtroGenero(game.genre.toLowerCase());
		})
		//Busco por plataforma
		.filter((game) => {
			return this.filtroPlatform(game.platform.toLowerCase());
			//return game.platform.toLowerCase() === this.state.platform_selected.toLowerCase();
		})
		
		.sort((a,b) => a.game_name > b.game_name? 1:-1);

		return filteredGames;
	}

		filtroGenero(genre){
			if (this.state.genre_selected === "")
				return true;
			else
				if (this.state.genre_selected.toLowerCase() === genre){
					return true;
				}else{
					return false;
				}
		}

		filtroPlatform(platform){
			if (this.state.platform_selected === "")
				return true;
			else
				if (this.state.platform_selected.toLowerCase() === platform){
					return true;
				}else{
					return false;
				}
		}


	render() { 
		return  (
				<div id="content" className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"> 
					<header id="header_bar" className="masthead mb-auto">
						<h4 className="masthead brand" id="brand_title">Game Tracker</h4>

						<SearchBar parentCallback = {this.onSearchData}></SearchBar>
					</header>
					<br></br> 

					<main role="main" className="inner cover" id="main_screen" >
						<div id="info_screen">
							<h1 className="cover-heading" >Game Tracker</h1>
							<p className="lead">Mira informacion de tus juegos favoritos y explora un catalogo lleno de experiencias nuevas!</p>
							<p className="lead">Powered By: <a href="http://whatcha-playing.herokuapp.com">Whatcha Playing</a></p>
							<button id="explore_button" className="btn btn-dark" onClick={this.startPage}> Explorar! </button>
						</div>
						{ this.state.loading ? <LoadingSpinner></LoadingSpinner> : 

						<div id="catalog" >
								<div className="navBar" id="filter_bar">
									<h5 id="filter_title">Filter By: </h5>	
									<FilterPlatform parentCallback = {this.onPlatformSelected}></FilterPlatform>
									<FilterGenre parentCallback = {this.onGenreSelected}></FilterGenre>
								</div>
							
								<div className="row row-cols-1 row-cols-md-4" id="game_grid" > 
								{
									this.filterByName().map((game) => {
										return <GameItem  game_id={game.id} key={game.id} game_name={game.game_name} genre={game.genre} platform={game.platform} cover_art_pic={game.cover_art_pic} auth_token={this.state.token} ></GameItem>
								}		
									)
								}
							</div>
						</div>
						}
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

		
		//Recupero los juegos de la api_rest
		const url_games = "https://whatcha-playing.herokuapp.com/api/games"
		const auth_data = this.state.token;
		this.setState({loading: true}, 
		() =>
		{
				
		let promesa_games = axios.get(url_games, {
			headers: {
		  'Authorization': auth_data
			}
		})
		//Para cada juego creo un componente
		promesa_games.then(response =>  {
			this.setState({
				loading: false,
				games: response.data.games
			})
			document.getElementById("catalog").style.visibility = "visible";
			document.getElementById("container_search_bar").style.visibility = "visible";
		})
		}	
		);

	
	}
}	



 
export default MainScreen;