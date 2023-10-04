import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const MagicTownsKnow = ({ data }) => {
  return (
    <div className="magic-towns-know-ctn">
			<div className="magic-towns-know-ctn-button">
				<h3 className="magic-towns-know-title">{data?.titleKnow}</h3>
				<LazyLoadImage
					src={require(`../../assets/img/magicTowns/pueblos_magicos-logo.png`)}
					alt={data?.titleKnow}
					className="magic-towns-icon"
				/>
				<div className="magic-towns-know-ctn-button-link">
					<a 
						href={data?.actions?.dir} 
						target="_blank" 
						rel="noopener noreferrer"
						className="magic-towns-know-button-link"
					>
						{data?.actions?.button}
					</a>
				</div>
			</div>
			<div className="magic-towns-know-ctn-image">
				<LazyLoadImage
					src={require(`../../assets/img/magicTowns/${data?.imageUrlKnow}`)}
					alt={data?.titleKnow}
					className="magic-towns-know-image"
				/>
			</div>
    </div>
  );
};

export default MagicTownsKnow;