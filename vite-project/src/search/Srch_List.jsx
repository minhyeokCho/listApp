import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Link, useParams } from 'react-router-dom';

const Srch_List = ({db01}) => {
	let {title} = useParams();
	const [order, setOrder]= useState([]); //배열 정렬
	const [pageTit,setPageTit] = useState(title); //전달받은 페이지 타이틀
	const [cul, setCul] = useState([]); //배열 노출
	const [isActive, setIsActive] = useState(0); //정렬 탭 active
	const [type , setType] = useState(false); //목록 노출 타입
	// 문화체육관광부 리스트 노출

	useEffect(() => {
		const database = db01.filter((tit) => tit.creator.includes(pageTit))
		setOrder(database)
	},[db01])

	useEffect(() => {
		let dataList = Object.values(order).map(((tit, i) => {
			const name = tit.title, //제목
				imgURl = tit.referenceIdentifier, //이미지 경로
				collection = tit.creator, //소속
				time = tit.time

			if(collection.includes(pageTit)){
				return <div className='group' key={i}>
					<Link to={`/detail/${tit.rn}`}>
						<figure>
							<img src={imgURl} alt="" />
						</figure>
						<span>{collection}</span>
						<p>{name}</p>
						<strong>{time}</strong>{tit.rn}
					</Link>
				</div>;
			}
		}));
		setCul(dataList)
	}, [order]);

	const typeChange = () => {
		setType(!type);
	}

	const tab = [
		{name: '인기순'},
		{name: '최신순'},
		{name: '가나다순'}
	]

	// 정렬 탭
	const handleClick = (index) => {
		const database = db01.filter((tit) => tit.creator.includes(pageTit))
		setIsActive(index); //탭 active

		// 정렬 탭
		switch(index) {
			case 0 :
				return setOrder(db01);
			case 1 :
				db01 = database.sort((a,b) => {
					if(a.rn > b.rn) return 1;
					if(a.rn < b.rn) return -1;
					return 0;
				})
				return setOrder(db01);
			case 2 :
				db01 = database.sort((a,b) => {
					const aTit = a.title.trim(),
						bTit = b.title.trim();
					if(aTit > bTit) return 1;
					if(aTit < bTit) return -1;
					return 0;
				})
				return setOrder(db01);
			default :
				break;
		}
	}

	return (
		<div className='srch_wrap'>
			<div className="srch_tit">
				<h2>{pageTit}</h2>
				<div className="sort_wrap">
					<ul className="type_sort">
						<li><button onClick={() => typeChange()} className='gall'><span className="blind">갤러리형</span></button></li>
						<li><button onClick={() => typeChange()} className='board'><span className="blind">게시판형</span></button></li>
					</ul>
					<ul className='prd_sort'>
						{tab.map((item, index) => (
							<li key= {index} className={index === isActive ? 'on' : ' '}>
								<button onClick={() => handleClick(index)}>{item.name}</button>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="main_list">
				<div className={type ? 'board_type srch_list' : 'gallery_type srch_list'}>
					{cul}
				</div>
			</div>
		</div>
	);
};

export default Srch_List;