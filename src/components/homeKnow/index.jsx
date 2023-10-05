import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';

const HomeKnow = ({ data }) => {
  const listKnow = data?.listKnow;

  const colors = [
    '166, 32, 140, .5',
    '229, 38, 25, .5',
    '236, 6, 139, .5',
    '253, 167, 0, .5',
    '136, 194, 67, .5',
    '3, 160, 175, .5'
  ];

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
    <div className="home-know-ctn">
      <div className="home-know-ctn-title">
        <h2 className="home-know-title">{data?.titleListKnow}</h2>
        <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data?.subtitleListKnow}</p>
          </div>
        </div>
      </div>
      <div className="home-know-ctn-cards">
        {listKnow?.map(item => (
          <div className="home-know-ctn-card" style={{transform: `translate(${slideCount}00%)`}}>
            <LazyLoadImage
              src={require(`../../assets/img/header/${item?.image}`)}
              alt={item?.title}
              className="home-know-card-img"
            />
            <div className="home-know-ctn-card-description" style={{ background: `rgba(${colors[Math.floor(Math.random() * 6)]})`}} >
              <p className="home-know-card-description-title">{item?.title}</p>
                <a href={item?.dir} className="home-know-card-description-btn homeLink">
                  {'>'}
                </a>
            </div>
          </div>
        ))}
      </div>
      <div className="home-know-ctn-buttons">
        <button className="home-know-buttons" onClick={() => prevSlide()} >
            <img className="home-know-buttons-img" src={Left} alt="arrow right" />
        </button>
        <button className="home-know-buttons" onClick={() => nextSlide()} >
          <img className="home-know-buttons-img" src={Right} alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default HomeKnow;