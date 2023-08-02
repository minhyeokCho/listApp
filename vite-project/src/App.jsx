import './App.css'

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from './detail/Detail'
import App_Main from './App_Main';

function App() {
	return (
		<BrowserRouter>

			<Routes>
				{/* useParams */}

				<Route path="/" element={<App_Main />} />
				{/* 웹 서비스 소개 페이지 */}
				<Route path="/detail" element={<Detail />} />
				{/* 상세페이지 */}
			</Routes>
		</BrowserRouter>
	)
}

export default App
