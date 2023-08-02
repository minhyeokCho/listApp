import React, { useEffect, useState } from 'react';

import DataList from './data/DataList'
import MainList from './collection/MainList'
import Header from './layout/Header'
import Search from './layout/Search'
import MainList_02 from './collection/MainList_02';

const App_Main = ({db01}) => {
	console.log(db01);
	// const [info, setInfo] = useState([])
	// useEffect(() => {
	// 	setInfo(db01)
	// }, [db01])
	// console.log(info);
	return (
		<div className='wrapper'>
			<Header/>
			<Search/>
			{/* <MainList/> */}
			{/* <MainList db01={db01}/>
			<MainList_02 db01={db01}/> */}
			<DataList/>
		</div>
	);
};

export default App_Main;