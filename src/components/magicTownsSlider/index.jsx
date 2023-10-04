import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';

const MagicTownsSlider = ({ data }) => {
	const [slideCount, setSlideCount] = useState(0);

	const nextSlide = () => {
    if (slideCount >= -10000) {
      setSlideCount(slideCount - 1);
    }
  };

  const prevSlide = () => {
    if (slideCount !== 0) {
      setSlideCount(slideCount + 1);
    }
  };

  return (
    <div className="magic-towns-slider-ctn">
			<h2 className="magic-towns-slider-title">{data?.titleSlider}</h2>
			<div >
				<div className="magic-towns-slider-ctn-cards" style={{transform: `translate(${slideCount}00%)`}}>
				{data?.slidersExplore?.map(item => (
        <a href={item?.link}  target="_blank">
          <div className="magic-towns-slider-ctn-card" style={{transform: `translate(${slideCount}00%)`}}>
            <div className="magic-towns-slider-ctn-card-title">{item.title}</div>
            <LazyLoadImage
              src={require(`../../assets/img/magicTowns/${item?.imageUrl}`)}
              alt={item?.title}
              className="magic-towns-slider-card-img"
            />
          </div>
          </a>
        ))}
				</div>
				<div className="magic-towns-slider-ctn-buttons">
					<button className="magic-towns-slider-buttons" onClick={() => prevSlide()} >
							<img className="magic-towns-slider-buttons-img" src={Left} alt="arrow right" />
					</button>
					<button className="magic-towns-slider-buttons" onClick={() => nextSlide()} >
						<img className="magic-towns-slider-buttons-img" src={Right} alt="arrow right" />
					</button>
				</div>
			</div>
		</div>
  );
};

export default MagicTownsSlider;