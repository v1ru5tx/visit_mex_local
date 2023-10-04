import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.css";

const TrenMayaContent = ({ data }) => {
  return (
    <section className="tren-maya-ctn">
      <div className="informacion">
        <div className="informacion--left">
          <h1 className="informacion--titulo">{data.subtitle}</h1>
          <p className="informacion--texto">{data.text}</p>
          <ul>
            {data?.subText?.map((item) => (
              <li>{item.text}</li>
            ))}
          </ul>
        </div>
        <div className="informacion--right">
          <LazyLoadImage
            src={require(`../../assets/img/${data.imgUrl}`)}
            alt=""
            className="informacion--imagen"
          />
        </div>
      </div>
      <LazyLoadImage
        src={require(`../../assets/img/header/liston-azul.webp`)}
        alt=""
        className="calendario2-franja"
      />
      <div className="galeria">
        <h1 className="galeria--titulo">{data.subTitle2}</h1>
        <div className="galeria--contenido">
          {data?.gallery?.map((item) => (
            <LazyLoadImage
              src={require(`../../assets/img/${item.imgUrl}`)}
              alt=""
              className={item.clase}
            />
          ))}
        </div>
      </div>
      <br />

      <LazyLoadImage
        src={require(`../../assets/img/header/liston-azul.webp`)}
        alt=""
        className="calendario2-franja"
      />

     
    </section>
  );
};

export default TrenMayaContent;
