import './styles.css';
import banner from '../../assets/img/blog/principal.jpg'



const BlogBanner = ({ data }) => {
  return (
    <section >
      <div className="banner">
        <img src={banner} alt="Banner" />
        <div className="banner-content">
          <h1>{data.title}</h1>
        </div>
    </div>
  
  </section>
  )
};

export default BlogBanner;
