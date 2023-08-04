import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = ({db01}) => {
	let {id} = useParams();
	// console.log(db01[id]);

	// 객체 목록
	const language = Object.keys(db01[id].language).length !==  0 ? '# ' + db01[id].language : '',
		category = Object.keys(db01[id].subjectCategory).length !==  0 ? '# ' + db01[id].subjectCategory : '',
		thumbnail = Object.keys(db01[id].referenceIdentifier).length !==  0 ? db01[id].referenceIdentifier : '-',
		creator = Object.keys(db01[id].creator).length !==  0 ? db01[id].creator : '-',
		title = Object.keys(db01[id].title).length !==  0 ? db01[id].title : '-',
		period = Object.keys(db01[id].period).length !==  0 ? db01[id].period : '-',
		time = Object.keys(db01[id].time).length !==  0 ? db01[id].time : '-',
		location = Object.keys(db01[id].venue).length !==  0 ? db01[id].venue : '-',
		charge = Object.keys(db01[id].charge).length !==  0 ? db01[id].charge : '-',
		refer = Object.keys(db01[id].reference).length !==  0 ? db01[id].reference : '-',
		reservation = Object.keys(db01[id].source).length !==  0 ? db01[id].source : '-',
		desc = Object.keys(db01[id].description).length !==  0 ? db01[id].description : '-',
		grade = Object.keys(db01[id].grade).length !==  0 ? db01[id].grade : '-'


	// 객체를 HTML형식으로 변환
	function des() {
		return {__html : desc}
	}

	return (
		<>
			<div className="detail_wrap" key={id}>
				{/* {db01[id].rn} */}
				<figure>
					<img src={thumbnail} alt="" />
				</figure>
				<div className="info">
					<ul className='label'>
						<li>
							{language}
						</li>
						<li>
							{category}
						</li>
					</ul>
					<span>{creator}</span>
					<h2>{title}</h2>
					<ul className='info_data'>
						<li><strong>기간</strong> <p>{period}</p></li>
						<li><strong>시간</strong> <p>{time}</p></li>
						<li><strong>장소</strong> <p>{location}</p></li>
						<li><strong>금액</strong> <p>{charge}</p></li>
						<li><strong>문의</strong> <p>{refer}</p></li>
						<li><strong>등급</strong> <p>{grade}</p></li>
					</ul>
					<div className="btn_wrap">
						<a href={reservation} target='_blank' className="res_btn">예약하러가기</a>
					</div>
				</div>
				<div className="des">
					<h3>소개</h3>
					<p dangerouslySetInnerHTML={des()}></p>
				</div>
			</div>
		</>
	);
};

export default Detail;