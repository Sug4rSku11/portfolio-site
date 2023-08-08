import React from 'react';
import me2 from './Images/Image2.png';

const Home = () => {
	return (
		<div className="home-div">
			<div className='home-img'>
				
				<img src={me2}></img>
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