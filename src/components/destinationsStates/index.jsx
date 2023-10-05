import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const DestinationsStates = ({ data }) => {
	const colors = [
    '166, 32, 140, .5',
    '229, 38, 25, .5',
    '236, 6, 139, .5',
    '253, 167, 0, .5',
    '136, 194, 67, .5',
    '3, 160, 175, .5'
  ];
  console.log('data?.states: ', data?.states);
	const getDEstinations = () => (
		data?.states?.map(item => (
			<div 
				key={item?.id}
				className="destinations-states-ctn-card"
			>
				<LazyLoadImage 
					src={require(`../../assets/img/destinations/${item?.urlImg}`)}
					alt={item?.id}
					className="destinations-states-card-img"
				/>
				<p className="destinations-states-card-text-hover">{item?.titleTop}</p>
				<div className="destinations-states-ctn-card-hover" style={{ background: `rgba(${colors[Math.floor(Math.random() * 6)]})`}}>
					<p className="destinations-states-card-text">{item?.titleTop}</p>
					<Link 
						to={`/destinos/${item?.id}`}
						className="destinations-states-card-link"
					>
						{data?.textButton}
					</Link>
				</div>
			</div>
		))
	);

  return (
    <div className="destinations-states-ctn">
      <h1 className="destinations-states-title">{data?.title}</h1>
      <div className="destinations-states-ctn-gallery">
        {getDEstinations()}
      </div>
    </div>
  );
};

export default DestinationsStates;
