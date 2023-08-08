import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
	return (
		<div className="home-div">
			<div className='home-img'>
				
				<img src="https://picsum.photos/id/237/200/300"></img>
			</div>
			<div className="home-me">
				<h2>Desiree Garcia</h2>
				<p>
				A little description of what I do.
				</p>
			</div>
	</div>
	)
}
export default Home;