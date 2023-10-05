import {useState, useEffect, useContext } from "react";
import { Context } from '../../Context';
import "./styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from '@fullcalendar/core/locales/es';
import frLocale from '@fullcalendar/core/locales/fr';
import ptLocale from '@fullcalendar/core/locales/pt';
import itLocale from '@fullcalendar/core/locales/it';
import jpLocale from '@fullcalendar/core/locales/ja';
import enLocale from '@fullcalendar/core/locales/en-au';
import deLocale from '@fullcalendar/core/locales/de';
import cnLocale from '@fullcalendar/core/locales/zh-cn';

const CalendarioTime = ({ data }) => {

  const { isLanguage } = useContext(Context);
  const [ language, setLocale] = useState(esLocale);

  useEffect(() => {
    setStyleDetailDate('firtscontainer');
		isLanguage === 'ES' ? setLocale(esLocale)
		: isLanguage === 'EN' ? setLocale(enLocale)
		: isLanguage === 'FR' ? setLocale(frLocale)
	  : isLanguage === 'DE' ? setLocale(deLocale)
		: isLanguage === 'PT' ? setLocale(ptLocale)
		: isLanguage === 'IT' ? setLocale(itLocale)
		: isLanguage === 'JP' ? setLocale(jpLocale)
		: isLanguage === 'CN' ? setLocale(cnLocale)
		: setLocale(esLocale)
	}, [isLanguage]);

  const[styleDetailDate,setStyleDetailDate]=useState('firtscontainer');
  const[eventImg,setEventImg]=useState('calendario/diaMuertos.webp');
  const[eventLink,setEventLink]=useState('https://www.facebook.com/VivaAguascalientes?mibextid=ZbWKwL');
  const[titleDate,setTitleDate]=useState('Vendimias aguascalientes');
  const handleDateClick = (arg) => {
    setStyleDetailDate('firtscontainer2');
    setTitleDate(arg.event._def.title);
    setEventImg(arg.event._def.extendedProps.urlImg);
     setEventLink(arg.event._def.extendedProps.vinculo);
  };

  const titleCalendar= {
    month: 'long',
    year: 'numeric'
  };

  const closeAdvertisement = () =>{
    setStyleDetailDate('firtscontainer');
  };

  return (
    <section>
      <LazyLoadImage
        src={require(`../../assets/img/header/Fondoamarrillo.webp`)}
        alt=""
        className="calendario2-franja"
      />
      <h2 className="destination-known-title">{data.title}</h2>

      <div class="contenedor-flexbox">
        <div class="secondcontainer">
          <FullCalendar
            titleFormat={titleCalendar}
            className="calendar2-calendar"
            plugins={[dayGridPlugin]}
            eventClick={handleDateClick}
            initialView="dayGridMonth"
            updateSize="true"
            weekends={true}
            locale={language}
            showNonCurrentDates={true}
            events={data.events}
          />
          <br />
        </div>
        <div class={styleDetailDate}>
          <button type="button" className="calendarButton" onClick={closeAdvertisement}>X</button>
          <a href={eventLink} target="_blank" className={eventLink!=""? "linkEvent":"disabledStyle"}>
            <h3 className="calendar-detail-title">{titleDate}</h3>
              <div className="detailDateImage">
                <LazyLoadImage src={require(`../../assets/img/${eventImg}`)} alt=""/>
              </div>
              </a>
            
        </div>
      </div>

      <br />
    </section>
  );
};

export default CalendarioTime;
