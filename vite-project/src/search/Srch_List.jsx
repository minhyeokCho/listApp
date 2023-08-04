import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Srch_List = ({db01}) => {
	const [order, setOrder]= useState()
	let {title} = useParams();
	const [pageTit,setPageTit] = useState(title); //전달받은 페이지 타이틀
	const [cul, setCul] = useState([]);
	// console.log(db01);
	// 문화체육관광부 리스트 노출
	useEffect(() => {
		let dataList = Object.values(db01).map(((tit, i) => {
			const name = tit.title, //제목
				imgURl = tit.referenceIdentifier, //이미지 경로
				collection = tit.creator, //소속
				time = tit.time

			if(collection.includes(pageTit)){
				return <div className='group' key={i}>
					<Link to={`/detail/${i}`}>
						<figure>
							<img src={imgURl} alt="" />
						</figure>
						<span>{collection}</span>
						<p>{name}</p>
						<strong>{time}</strong>{tit.rn}
					</Link>
				</div>;
			}
			setOrder(db01.filter((tit) => tit.creator.includes(pageTit)));
		}));
		setCul(dataList)
	}, [db01]);
	console.log(order);

	// const sortBy = order.sort((a,b) => {
	// 	if(a.rn > b.rn) return 1;
	// 	if(a.rn < b.rn) return -1;
	// 	return 0;
	// })
	// console.log(sortBy);

	const handleSortClick = () => {

	}
	const handleBestClick = () => {

	}

	return (
		<div className='srch_wrap'>
			<div className="srch_tit">
				<h2>{pageTit}</h2>
				<ul>
					<li><button>베스트순</button></li>
					<li><button>가나다순</button></li>
				</ul>
			</div>
			<div className="main_list">
				<div className="srch_list">
					{cul}
				</div>
			</div>
		</div>
	);
};

export default Srch_List;