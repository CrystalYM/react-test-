import React from 'react';
import './Footer.css';
import FooterData from '../data/FooterData';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='col col-1'>
					<h1>
						De<span className='primary'>Fi</span>
					</h1>
				</div>
				{FooterData.map(({ title, link1, link2, link3, link4 }, index) => {
					return (
						<div className='col' key={index}>
							<h5>{title}</h5>
							<span className='bar'></span>
							<a href='/'>{link1}</a>
							<a href='/'>{link2}</a>
							<a href='/'>{link3}</a>
							<a href='/'>{link4}</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Footer;
