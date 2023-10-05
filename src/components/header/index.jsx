import { useState, useEffect, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import { useNavigate } from 'react-router-dom';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css';
import listSecondaryEs from '../../assets/data/header/es/listSecondary.json';
import listSecondaryEn from '../../assets/data/header/en/listSecondary.json';
import listSecondaryFr from '../../assets/data/header/fr/listSecondary.json';
import listSecondaryDe from '../../assets/data/header/de/listSecondary.json';
import listSecondaryPt from '../../assets/data/header/pt/listSecondary.json';
import listSecondaryIt from '../../assets/data/header/it/listSecondary.json';
import listSecondaryJp from '../../assets/data/header/jp/listSecondary.json';
import listSecondaryCn from '../../assets/data/header/cn/listSecondary.json';
import listPrimaryEs from '../../assets/data/header/es/listPrimary.json';
import listPrimaryEn from '../../assets/data/header/en/listPrimary.json';
import listPrimaryFr from '../../assets/data/header/fr/listPrimary.json';
import listPrimaryDe from '../../assets/data/header/de/listPrimary.json';
import listPrimaryPt from '../../assets/data/header/pt/listPrimary.json';
import listPrimaryIt from '../../assets/data/header/it/listPrimary.json';
import listPrimaryJp from '../../assets/data/header/jp/listPrimary.json';
import listPrimaryCn from '../../assets/data/header/cn/listPrimary.json';
import listLanguages from '../../assets/data/header/listLanguages.json';
import optionsEs from '../../assets/data/header/es/listSearch.json';
import optionsEn from '../../assets/data/header/en/listSearch.json';
import optionsFr from '../../assets/data/header/fr/listSearch.json';
import optionsDe from '../../assets/data/header/de/listSearch.json';
import optionsPt from '../../assets/data/header/pt/listSearch.json';
import optionsIt from '../../assets/data/header/it/listSearch.json';
import optionsJp from '../../assets/data/header/jp/listSearch.json';
import optionsCn from '../../assets/data/header/cn/listSearch.json';

import Logo from '../../assets/img/header/logo.png';
import './styles.css';

const Header = () => {
  const { isLanguage, selectedLanguage } = useContext(Context);
  const [listSecondary, setListSecondary] = useState(listSecondaryEs);
  const [listPrimary, setListPrimary] = useState(listPrimaryEs);  
  const navigate = useNavigate();
  const [redirectUrl, setredirectUrl] = useState('/');
  const [options, setOptions] = useState(optionsEs);

  const changeLanguage = (e) => {
    selectedLanguage(e.target.value);
  }; 

  const listMenuSecondary = () => (
    listSecondary?.map(item => (
      <li className="header-menu-li-secondary" key={item.name}>
        <Link to={item.dir}>
          {item.name}
        </Link>
      </li>
    ))
  );

  const listMenuPrimary = () => (
    listPrimary?.map(item => (
      <li className="header-menu-li-primary" key={item.name}>
        <Link to={item.dir}>
          {item.name}
        </Link>
        {item?.menu &&
          <div className="header-ctn-submenu-primary">
          {item?.menu?.map(subItem => (
            <div className="header-ctn-submenu-link-primary">
              <Link to={subItem.dir} className="header-submenu-link-primary">
                {subItem.name}
              </Link>
              {subItem?.menu &&
                <div className="header-ctn-sub-submenu-link-primary">
                {subItem?.menu?.map(subSbuItem => (
                  <div className="header-ctn-submenu-link-primary">
                    <Link to={subSbuItem.dir} className="header-submenu-link-primary">
                      {subSbuItem.name}
                    </Link>
                  </div>
                ))}
                </div>
              }
              <LazyLoadImage
                src={require(`../../assets/img/header/${subItem.image}`)}
                alt='logo visitmexico'
                className={subItem.claseImage}
              />
            </div>
          ))}
          </div>
        }
      </li>
    ))
  );

  const languages = () => (
    listLanguages?.map(item => (
      <option value={item.value} key={item.name}>{item.name}</option>
    ))
  );

  useEffect(() => {
    isLanguage === 'ES' ? setListSecondary(listSecondaryEs)
    : isLanguage === 'EN' ? setListSecondary(listSecondaryEn)
    : isLanguage === 'FR' ? setListSecondary(listSecondaryFr)
    : isLanguage === 'DE' ? setListSecondary(listSecondaryDe)
    : isLanguage === 'PT' ? setListSecondary(listSecondaryPt)
    : isLanguage === 'IT' ? setListSecondary(listSecondaryIt)
    : isLanguage === 'JP' ? setListSecondary(listSecondaryJp)
    : isLanguage === 'CN' ? setListSecondary(listSecondaryCn)
    : setListSecondary(listSecondaryEs)
  }, [isLanguage]);

  useEffect(() => {
    isLanguage === 'ES' ? setListPrimary(listPrimaryEs)
    : isLanguage === 'EN' ? setListPrimary(listPrimaryEn)
    : isLanguage === 'FR' ? setListPrimary(listPrimaryFr)
    : isLanguage === 'DE' ? setListPrimary(listPrimaryDe)
    : isLanguage === 'PT' ? setListPrimary(listPrimaryPt)
    : isLanguage === 'IT' ? setListPrimary(listPrimaryIt)
    : isLanguage === 'JP' ? setListPrimary(listPrimaryJp)
    : isLanguage === 'CN' ? setListPrimary(listPrimaryCn)
    : setListPrimary(listPrimaryEs)
  }, [isLanguage]);

  useEffect(() => {
    isLanguage === 'ES' ? setOptions(optionsEs)
    : isLanguage === 'EN' ? setOptions(optionsEn)
    : isLanguage === 'FR' ? setOptions(optionsFr)
    : isLanguage === 'DE' ? setOptions(optionsDe)
    : isLanguage === 'PT' ? setOptions(optionsPt)
    : isLanguage === 'IT' ? setOptions(optionsIt)
    : isLanguage === 'JP' ? setOptions(optionsJp)
    : isLanguage === 'CN' ? setOptions(optionsCn)
    : setOptions(optionsEs)
  }, [isLanguage]);

  const handleSearch = (data) => {
    setredirectUrl(data);
  };

  useEffect(() => {
    navigate(redirectUrl)
  }, [redirectUrl]);

  return (
    <div className="header-ctn">
      
      <div className="header-ctn-logo">
        <Link to={'/'}>
          <LazyLoadImage
            src={Logo}
            alt='logo visitmexico'
            className="header-logo"
          />
        </Link>
      </div>
      <nav className="header-ctn-menu">
        <div className="header-ctn-menu-ul-secondary">
          <ul className="header-menu-ul-secondary">
            {listMenuSecondary()}
            <SelectSearch 
              search={true}
              options={options}
              value=""
              name="search"
              placeholder="🔎 Buscar"
              onChange={handleSearch}
            />
            <select className="header-menu-select" onChange={(e) => changeLanguage(e)} id="selectLanguage">
              {languages()}
            </select>
          </ul>
        </div>
        <div className="header-ctn-menu-ul-primary">
          <ul className="header-menu-ul-primary">
            {listMenuPrimary()}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;