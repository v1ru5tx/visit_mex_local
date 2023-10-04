import React, { useState } from 'react';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';

const InternationalEventsSliderVideo = ({ data }) => {
  const [slideCount, setSlideCount] = useState(0);

  const nextSlide = () => {
    if (slideCount >= -3) {
      setSlideCount(slideCount - 1);
    }
  };

  const prevSlide = () => {
    if (slideCount !== 0) {
      setSlideCount(slideCount + 1);
    }
  };

  return (
    <section className="international-events-slider-video-ctn">
      <h2 className="international-events-slider-video-title">{data?.titleSlider}</h2>

      <div className="international-events-slider-video-ctn-cards">
        {data?.slider?.map(item => (
          <div className="international-events-slider-video-ctn-card" style={{transform: `translate(${slideCount}00%)`}}>
            <iframe
              width="100%"
              height="100%"
              src={item?.urlVideo}
              title={item?.description}
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading='lazy'  
            />
          </div>
        ))}
      </div>

      <div className="international-events-slider-video-ctn-buttons">
        <button className="international-events-slider-video-buttons" onClick={() => prevSlide()} >
            <img className="international-events-slider-video-buttons-img" src={Left} alt="arrow right" />
        </button>
        <button className="international-events-slider-video-buttons" onClick={() => nextSlide()} >
          <img className="international-events-slider-video-buttons-img" src={Right} alt="arrow right" />
        </button>
      </div>
    </section>
  )
};

export default InternationalEventsSliderVideo;
