import './App.css'
import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from './detail/Detail'
import App_Main from './main/App_Main';
import Header from './layout/Header';
import Srch_List from './search/Srch_List';
import ScrollToTop from './ScrollToTop';
import Search from './layout/Search';
import { createContext } from 'react';

function App() {
	const [db01, setDb01] = useState([]);
	function xmlToJson(xml) { //XML 을 JSON 형식으로 변환
		// Create the return object
		var obj = {};

		if (xml.nodeType == 1) {
		// element
		// do attributes
		if (xml.attributes.length > 0) {
			obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
			var attribute = xml.attributes.item(j);
			obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
		} else if (xml.nodeType == 3) {
		// text
		obj = xml.nodeValue;
		}

		// do children
		// If all text nodes inside, get concatenated text from them.
		var textNodes = [].slice.call(xml.childNodes).filter(function(node) {
			return node.nodeType === 3;
		});
		if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
			obj = [].slice.call(xml.childNodes).reduce(function(text, node) {
				return text + node.nodeValue;
			}, "");
		} else if (xml.hasChildNodes()) {
			for (var i = 0; i < xml.childNodes.length; i++) {
				var item = xml.childNodes.item(i);
				var nodeName = item.nodeName;
				if (typeof obj[nodeName] == "undefined") {
					obj[nodeName] = xmlToJson(item);
				} else {
					if (typeof obj[nodeName].push == "undefined") {
						var old = obj[nodeName];
						obj[nodeName] = [];
						obj[nodeName].push(old);
					}
					obj[nodeName].push(xmlToJson(item));
				}
			}
		}
		return obj;
	}

	useEffect(() => {
		const getXMLfromAPI = async () => {

			const url = "http://api.kcisa.kr/openapi/service/rest/convergence/conver6?serviceKey="; //API URL
			const ENCODING_API_KEY = "002b3e6a-94ee-4983-b34d-6d722e34ea3f" //KEY 값
			// const url = "http://api.kcisa.kr/openapi/service/rest/convergence2019/getConver05?serviceKey="; //API URL
			// const ENCODING_API_KEY = "ebd38241-f0fc-4fee-b72f-d5d9d276b64f" //KEY 값
			const numRow = "&numOfRows=2000" //요청레코드수
			const keyword = "&keyword=" //검색어
			const reqURL = `${url}${ENCODING_API_KEY}${numRow}${keyword}`; //URL
			const response = await fetch(reqURL);
			const xmlString = await response.text();

			let XmlNode = new DOMParser().parseFromString(xmlString, "text/xml");
			let dataList = xmlToJson(XmlNode).response.body.items.item
			setDb01(dataList);
		};

		getXMLfromAPI();
	}, [])
	return (
		<div className="wrapper">
			<BrowserRouter>
				<ScrollToTop/>
				<Header element={<Search db01={db01}/>} />
				<Routes>
					{/* useParams */}

					<Route path="/" element={<App_Main db01={db01} />} />
					{/* 웹 서비스 소개 페이지 */}
					<Route path="/detail/:id" element={<Detail db01={db01} />} />
					{/* 상세페이지 */}
					<Route path="/search/List/:title" element={<Srch_List db01={db01} />} />
					{/* 상세 목록페이지 */}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
