import React from 'react';
import './styles.css';

const DestinationVideo = ({ data }) => {
  return (
    <section className="state-video-top-ctn">
      <iframe
        width="100%"
        height="100%"
        src={data?.urlVideoTop}
        title={data?.id}
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading='lazy'  
      />
    </section>
  )
};

export default DestinationVideo;
