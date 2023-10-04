import React from 'react';
import './styles.css';

const InternationalEventsHeader = ({ data }) => {
  return (
    <div className="international-events-header-ctn">
      <h1 className="international-events-header-title">{data?.title}</h1>
    </div>
  );
};

export default InternationalEventsHeader;