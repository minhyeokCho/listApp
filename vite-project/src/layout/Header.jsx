import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<Link to="/">
				<h1 className='home'><span className='blind'>홈으로</span></h1>
			</Link>
		</header>
	);
};

export default Header;