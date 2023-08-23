import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Search = ({db01}) => {
	const [text, setText] = useState('');

	// console.log(db01);
	// useEffect(() => {
	// 	const database = db01
	// 	console.log(database);
	// },[db01])

	const onChange = (e) => {
		setText(e.target.value);
	}
	return (
		<>
			<div className='search_wrap'>
				<input type="text" placeholder='검색영역' onChange={onChange} value={text} />
				<button type='button'>
					<span className="blind">검색</span>
				</button>
			</div>
			<b>{text}</b>
		</>
	);
};

export default Search;