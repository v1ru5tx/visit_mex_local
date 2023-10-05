import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';
import { Link } from 'react-router-dom';

const BlogContent = ({ data }) => {
  
  const getPosts = () => (
    data?.posts?.map(item => (
      <div className="home-recent-articles-ctn-card">
        <div className="home-recent-articles-ctn-card-image">
        <div className="home-recent-articles-ctn-subtitle">
          <Link 
            to={item.urlPost} state={{postId: item.post}}
          >
            <LazyLoadImage 
            src={require(`../../assets/img/${item?.urlImg}`)}
            alt={item?.title}
            className="home-recent-articles-card-image"
          />
          </Link>
        </div>
        </div>
        <div className="home-recent-articles-ctn-card-info">
          <p className="home-recent-articles-card-info-title">{item?.name}</p>
          <p className="home-recent-articles-card-info-category">{item?.text}</p>
        </div>
      </div>
    ))
  );

  return (
    <div className="home-recent-articles-ctn">
      <div className="home-recent-articles-ctn-content">
        <div className="home-recent-articles-ctn-cards">
          {getPosts()}
        </div>
      </div>
    </div>
  
  
  )
};

export default BlogContent;
