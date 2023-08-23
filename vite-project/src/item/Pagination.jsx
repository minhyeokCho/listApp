import React, { useEffect, useState } from 'react';

const Pagination = ({count}) => {
	const [listCnt, setListCnt] = useState(10);
	// const [crtPage, setCrtPage] = useState(1);
	const [totPage, setTotPage] = useState();
	const [limit, setLimit] = useState(8)
	const [page, SetPage] = useState([])
	const [pageArr, SetPageArr] = useState(0)
	const [currentPageArray, SetCurrentPageArray] = useState([])
	// let pageArr = 0
	useEffect(() =>{
		setTotPage(Math.ceil(count / listCnt))
	},[count])

	//count 365 //listCnt 10 // totPage 총36페이지

	useEffect(() => {
		const pageNum = [];
		for(let i = 1; i<=Math.ceil(count / listCnt); i++){
			pageNum.push(i);
		}
		const totalPage = pageNum.map(()=>pageNum.splice(0, limit))
		SetPage(totalPage)

		SetCurrentPageArray(totalPage[pageArr])
		console.log();

	}, [pageArr])

	return(
		<nav>
			<button>이전</button>
			<ul>
				{currentPageArray.map((num, index) => (
					<li key={index}>
						{num}
					</li>
				))}
			</ul>
			<button onClick={() => SetPageArr(pageArr + 1)}>다음</button>

		</nav>
	)
};

export default Pagination;