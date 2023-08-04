import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainList = ({db01}) => {
	const [cul, setCul] = useState([]);

	// 문화체육관광부 리스트 노출
	useEffect(() => {
		let dataSwiper = Object.values(db01).map(((tit, i) => {
			const name = tit.title, //제목
				imgURl = tit.referenceIdentifier, //이미지 경로
				collection = tit.creator, //소속
				time = tit.time

			if(collection.includes('문화체육관광부')){
				return <div className='group' key={i}>
					<Link to={`/detail/${i}`}>
						<figure>
							<img src={imgURl} alt="" />
						</figure>
						<span>{collection}</span>
						<p>{name}</p>
						<strong>{time}</strong>
					</Link>
				</div>;
			}
		}));
		setCul(dataSwiper)
	}, [db01]);

	// Slick 옵션
	const settings = {
		infinite : true,
		variableWidth: true,
		arrows : false
	}

	return (
		<>
			<div className="tit_area">
				<h2 className='main_tit'>문화체육관광부</h2>
				<Link to={'/search/List/문화체육관광부'}>전체보기 &gt; </Link>
			</div>
			<Slider {...settings} className='main_list'>
				{cul}
			</Slider>
		</>
	);
};

export default MainList;