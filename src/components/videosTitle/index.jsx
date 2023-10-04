import React from 'react';
import './styles.css';

const VideosTitle = ({ data }) => {
	const getVideos = () =>	(
		data?.videosTop?.map(item => (
			<div className="videos-title-ctn-video">
				<iframe
					width="100%"
					height="100%"
					src={item?.videoUrl}
					title={item?.name}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					loading='lazy'
					className="videos-title-video"
				/>
				<p className="videos-title-video-description">{item?.name}</p>
			</div>
		))
	);

  return (
    <div className="videos-title-ctn">
			<h1 className="videos-title-title">{data?.title}</h1>
			<div className="videos-title-ctn-videos">
				{getVideos()}
			</div>
    </div>
  );
};

export default VideosTitle;