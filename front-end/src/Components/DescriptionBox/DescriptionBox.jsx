import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
	return (
		<div className='descriptionbox'>
			<div className="descriptionbox-navigator">
				<div className="descriptionbox-nav-box">Description</div>
				<div className="descriptionbox-nav-box fade">Reviews (122)</div>
			</div>
			<div className="descriptionbox-description">
				<p>An e-commerce website serves as an online marketplace, seamlessly connecting buyers and sellers across the digital landscape. Through its virtual storefront, it offers a vast array of products and services, spanning from everyday essentials to niche specialties, catering to diverse consumer needs and preferences.</p>
				<p>Picture it as a bustling marketplace where the streets are replaced by hyperlinks and the storefronts are digital banners adorned with enticing product images. With just a few clicks, customers can browse through an extensive catalog, compare prices, read reviews, and make purchases, all from the comfort of their homes or on-the-go via mobile devices.</p>
			</div>
		</div>
	);
}

export default DescriptionBox;