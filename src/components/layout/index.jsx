import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../header';
import Rss from '../Rss';
// import ScrollToTop from '../scrollToTop';
import Footer from '../footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Rss />
      {/* <ScrollToTop/> */}
      <ParallaxProvider>
        {children}
      </ParallaxProvider>
      <Footer />
    </div>
  );
};

export default Layout;