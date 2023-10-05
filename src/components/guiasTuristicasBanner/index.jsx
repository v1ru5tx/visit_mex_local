import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const GuiasTuristicasBanner = ({ data }) => {
  return (
    <section >
      <div className="gt-images-ctn-hero">
      
        <div className="gt-images-ctn-hero-description">
          <h1 className="gt-images-title">{data.title}</h1>
        </div> 
      </div>
    
    <LazyLoadImage src={require(`../../assets/img/diaMuertos/Fondo amarillo 5.png`)}  alt="" className="dm-franja" />

    
  </section>
  )
};

export default GuiasTuristicasBanner;
