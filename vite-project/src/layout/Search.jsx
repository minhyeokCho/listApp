import React from 'react';

const Search = () => {
	return (
		<div className='search_wrap'>
			<input type="text" placeholder='검색영역' />
			<button type='button'>
				<span className="blind">검색</span>
			</button>
		</div>
	);
};

export default Search;