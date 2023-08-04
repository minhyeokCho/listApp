import React, { useEffect, useState } from 'react';

import MainList from '../collection/MainList'
import MainList_02 from '../collection/MainList_02';
import Search from '../layout/Search'

const App_Main = ({db01}) => {
	return (
		<>
			<Search/>
			<MainList db01={db01}/>
			<MainList_02 db01={db01}/>
		</>
	);
};

export default App_Main;