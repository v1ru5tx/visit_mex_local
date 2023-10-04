import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-spring-3d-carousel';
import './styles.css';

const TrenMayaVideos = ({ data }) => {
  const getSlides = () => {
		const arraySlides = [];
		for (let i = 0; i < data?.videos?.length; i++) {
			arraySlides.push(
				{
					key: data?.videos[i]?.title,
					content: 
						<div className="magic-towns-video-slider-ctn-carousel-item-video">
							<iframe 
								className="magic-towns-video-slider-ctn-carousel-item"
								width="100%"
								height="70%"
								src={data?.videos[i]?.urlVideo}
								title={data?.videos[i]?.title}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								allowfullscreen 
							/>
							<p className="magic-towns-video-slider-description">{data?.videos[i]?.title}</p>
						</div>
				}
			);
		};
		return arraySlides;
	};
  return (
	<div>
		<h1 className="galeria--titulo">{data.subTitle3}</h1>
		<div className="magic-towns-video-slider-ctn-carousel">
		<Carousel slides={getSlides()} showNavigation={true}/>
		</div>
	</div>
 
  )
};

export default TrenMayaVideos;