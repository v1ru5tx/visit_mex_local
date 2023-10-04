import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const TrenMayaBanner = ({ data }) => {
  return (
    <section className="state-video-top-ctn">
    <iframe
      width="100%"
      height="100%"
      src={data?.urlVideo}
      title={data?.title}
      frameBorder="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading='lazy'  
    />
  </section>
    
  )
};

export default TrenMayaBanner;
