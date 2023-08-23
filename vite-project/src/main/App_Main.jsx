import React, { useEffect, useState } from 'react';

import MainList from '../collection/MainList'
import Search from '../layout/Search'

const App_Main = ({db01}) => {
	return (
		<>
			<Search/>
			<MainList db01={db01} value={'문화체육관광부'}/>
			<MainList db01={db01} value={'고양문화재단'}/>
			<MainList db01={db01} value={'국립현대미술관'}/>
		</>
	);
};

export default App_Main;