import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataList from './data/DataList'
import MainList from './collection/MainList'
import Header from './layout/Header'
import Search from './layout/Search'

function App() {
	return (
		<div className='wrapper'>
			<Header/>
			<Search/>
			<MainList/>

			<DataList/>
		</div>
	)
}

export default App
