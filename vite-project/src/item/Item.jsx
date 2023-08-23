import React from 'react';

const Item = ({imgURl,collection,name,time, rn}) => {
	return <>
		<figure>
			<img src={imgURl} alt="" />
		</figure>
		<span>{collection}</span>
		<p>{name}</p>
		<strong>{JSON.stringify(time)}</strong>
		{rn}
	</>
};

export default Item;