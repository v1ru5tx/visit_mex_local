import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logo from '../../assets/img/header/logo.png';
import Tiktok from '../../assets/img/rss/tiktok.svg';
import Facebook from '../../assets/img/rss/facebook.svg';
import Instagram from '../../assets/img/rss/instagram.svg';
import './styles.css';

const Footer = () => {
  const listFooter = {
    description: "",
    followUs: "Síguenos en:",
    linksFast: {
      name: "Enlaces de interés",
      links: [
        {
          name: "Tren Maya",
          dir: "/tren-maya"
        },
        {
          name: "Estados",
          dir: "/destinos"
        },
        {
          name: "Pueblos Mágicos",
          dir: "/pueblos-magicos"
        },
        {
          name: "Eventos Internacionales",
          dir: "/eventos-internacionales"
        },
        {
          name: "Experiencias",
          dir: "/experiencias"
        }
      ]
    },
    linksKnow: {
      name: "Conoce más",
      links: [
        {
          name: "Videos",
          dir: "/videos"
        },
        {
          name: "Guías Turísticas",
          dir: "/guias-turisticas"
        },
        {
          name: "Materiales de descarga",
          dir: "/https://behavior.com.mx/sectur/"
        },
        {
          name: "Calendario",
          dir: "/calendario"
        }
      ]
    },
    linksContact: {
      name: "Contáctanos",
      links: [
        {
          name: "Teléfonos:",
          dir: "/"
        },
        {
          name: "(01) 800 9797 8585",
          dir: "/"
        },
        {
          name: "(01) 800 9797 8585",
          dir: "/"
        },
        {
          name: "Correo:",
          dir: "/"
        },
        {
          name: "contacto@sectur.gob.mx",
          dir: "/"
        }
      ]
    }
  };

  const linksFast = () => (
    listFooter?.linksFast?.links?.map(item => (
      <li key={item?.name}>
        <Link to={item?.dir} className="footer-contact-section-text">{item?.name}</Link>
      </li>
    ))
  );

  const linksKnow = () => (
    listFooter?.linksKnow?.links?.map(item => (
      <li key={item?.name}>
        <Link to={item?.dir} className="footer-contact-section-text">{item?.name}</Link>
      </li>
    ))
  );

  const linksContact = () => (
    listFooter?.linksContact?.links?.map(item => (
      <li key={item?.name}>
        <Link to={item?.dir} className="footer-contact-section-text">{item?.name}</Link>
      </li>
    ))
  );

  return (
    <div className="footer-ctn">
      <div className="footer-ctn-contact">
        <div className="footer-ctn-contact-section">
          <Link to={'/'}>
            <LazyLoadImage 
              src={Logo}
              alt='visitmexico'
              className="footer-contact-logo"
            />
          </Link>
          <p className="footer-contact-section-text">{listFooter?.description}</p>
          <div>
            <p className="footer-contact-section-title">{listFooter?.followUs}</p>
            <div>
              <a href="https://www.tiktok.com/@visitmexico_oficial/"  target="_blank" rel="noopener noreferrer">
                <img className="footer-contact-rss" src={Tiktok} alt="tiktok" />
              </a>
              <a href="https://www.facebook.com/VisitMexicoES"  target="_blank" rel="noopener noreferrer">
                <img className="footer-contact-rss" src={Facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/visitmexico/"  target="_blank" rel="noopener noreferrer">
                <img className="footer-contact-rss" src={Instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-ctn-contact-section">
          <p className="footer-contact-section-title">{listFooter?.linksFast?.name}</p>
          <ul className="footer-contact-section-ul">
            {linksFast()}
          </ul>
        </div>
        <div className="footer-ctn-contact-section">
          <p className="footer-contact-section-title">{listFooter?.linksKnow?.name}</p>
          <ul className="footer-contact-section-ul">
            {linksKnow()}
          </ul>
        </div>
        <div className="footer-ctn-contact-section">
          <p className="footer-contact-section-title">{listFooter?.linksContact?.name}</p>
          <ul className="footer-contact-section-ul">
            {linksContact()}
          </ul>
        </div>
      </div>
      <div className="footer-ctn-contact-legal">
        <div className="footer-ctn-contact-legal-links">
          <Link className="footer-contact-legal-link" to="/">
            Condiciones generales | 
          </Link>
          <Link className="footer-contact-legal-link" to="/">
            Aviso legal | 
          </Link>
          <Link className="footer-contact-legal-link" to="/">
            Política de Privacidad | 
          </Link>
          <Link className="footer-contact-legal-link" to="/">
            Cookies
          </Link>
        </div>
        <div className="footer-ctn-contact-legal-links">
          <p className="footer-contact-legal-link">México®️, visitmexico.com®️, visitmexico®️, Pueblos Mágicos®️, Atención al Turista 078®️, Marcas Registradas a favor de la  Secretaría de Turismo del Gobierno de México.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;