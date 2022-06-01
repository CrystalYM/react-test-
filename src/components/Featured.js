import React, { useEffect, useState } from 'react';
import './Featured.css';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import axios from 'axios';

const Featured = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await axios.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'
			);
			setData(res.data);
		};
		getData();
	}, []);

	console.log(data);

	if (!data) return null;

	return (
		<div className='featured'>
			<div className='container '>
				<div className='left'>
					<h2>Explore top Crypto's Like Bitcoin, Ethereum and Dogecoin</h2>
					<p>See all available assets: Crptocurrencies and Nft's</p>
					<button className='btn'>See More Coins</button>
				</div>
				<div className='right'>
					{data.map((data, index) => {
						return (
							<div className='card' key={index}>
								<div className='top'>
									<img src={data.image} alt='coin' />
								</div>
								<div>
									<h5>{data.name}</h5>
									<p>${data.current_price.toLocaleString()}</p>
								</div>

								{data.price_change_percentage_24h < 0 ? (
									<span className='red'>
										<FiArrowDown className='icon' />
										{data.price_change_percentage_24h.toFixed(2)}%
									</span>
								) : (
									<span className='green'>
										<FiArrowUpRight className='icon' />
										{data.price_change_percentage_24h.toFixed(2)}%
									</span>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Featured;
