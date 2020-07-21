import React from 'react';
import "./ReviewItem.css";



class ReviewItem extends React.Component {
	state = {
		username: "",
		profile_pic: "",
		description: "",
		score: "",
		upvotes: ""
	}

	componentDidMount(){
		this.setState({
			username: this.props.username,
			profile_pic: this.props.profile_pic,
			description: this.props.description,
			score: this.props.score,
			upvotes: this.props.upvotes
		})
	}


	render() { 
		return ( <div id="review_panel" className="col-md-10">
				<div id="item_review" className="row">
					<div className="col-sm-2" id="container_image">
						<img src={'data:image/jpeg;base64,'+this.state.profile_pic} alt="" id="review_image"></img>
					</div>
					<div className="col-sm-8">
						<p>Por {this.state.username}</p>
						<p>Puntaje: {this.state.score} Estrellas</p>
					</div>
					
				</div>  
				<div id="item_review" className="row">
					<p>{this.state.description}</p>	
				</div>  
				<div id="item_review" className="row">
					<p>Likes: {this.state.upvotes}</p>
				</div>  

		
				</div> );
	}
}
 
export default ReviewItem;