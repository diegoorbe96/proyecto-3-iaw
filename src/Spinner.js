import React from 'react';

const LoadingSpinner = () => (
	<div className="text-center">
		<div className="spinner-border" style={{width: "3rem" , height: "3rem", color : "white"}}  role="status">
		<span className="sr-only">Loading...</span>
	</div>
	</div>
);

export default LoadingSpinner;