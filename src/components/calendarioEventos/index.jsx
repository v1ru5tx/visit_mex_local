import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.css";
import Right from "../../assets/img/rss/arrow-right.svg";
import Left from "../../assets/img/rss/arrow-left.svg";

const CalendarioEventos = ({ data }) => {

  const [slideCount, setSlideCount] = useState(0);

  const nextSlide = () => {
    if (slideCount >= -1000) {
      setSlideCount(slideCount - 1);
    }
  };

  const prevSlide = () => {
    if (slideCount !== 0) {
      setSlideCount(slideCount + 1);
    }
  };

  return (
    <div className="calendar2-known-ctn">
      <div className="calendario2-eventos">
        <h2 className="calendario-title titulo-calendario">{data?.titleTop}</h2>
       
        <h4 className="calendare-known-subtitle">{data?.subTitle}</h4>
      </div>
      <div className="calendar2-know-ctn-cards">
        {data?.events?.map((item) => (
          
            <div className="calendar2-know-ctn-card" style={{ transform: `translate(${slideCount}00%)` }}>
           
              <a href={item?.vinculo} className={item?.vinculo!==""? "linkEvent":"disabledStyle"} target="_blank">
              <div className="calendar2-header">
                <LazyLoadImage
                  src={require(`../../assets/img/${item?.urlImg}`)} alt={item?.title} className="calendar2-know-card-img"/>
                <button class="calendar2-fecha">{item.date}</button>
              </div>
              <div className="calendar2-know-ctn-card-description">
                <p className="calendar2-know-card-description-title">
                  {item?.title}
                </p>
                <p className="calendar2-know-card-description-text">
                  {item?.text}
                </p>
              </div>
              </a>
              

            </div>
         
        ))}
      </div>
      <div className="calendaEvents-ctn-buttons">
        <button className="calendarEvents-buttons" onClick={() => prevSlide()}>
          <img
            className="calendarEvents-buttons-img"
            src={Left}
            alt="arrow right"
          />
        </button>
        <button className="calendarEvents-buttons" onClick={() => nextSlide()}>
          <img
            className="calendarEvents-buttons-img"
            src={Right}
            alt="arrow right"
          />
        </button>
      </div>

    
    </div>
  );
};

export default CalendarioEventos;
