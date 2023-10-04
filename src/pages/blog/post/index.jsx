import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Banner from '../../../components/shared/Banner';
import Content from '../../../components/shared/Content';
import HomeSuscribe from '../../../components/homeSuscribe';
import './styles.css';

const Post = () => {
  const { isLanguage } = useContext(Context);
  const { postId } = useLocation().state;
  const [ Data, setData ] = useState({});;
  const [ dataLanguage, setLanguage ] = useState(null);
  const getMarkdown = async (id) => {
    return await require(`../../../assets/data/blog/postLanguages/${id}.json`)
  }

  useEffect(()=>{
    getMarkdown(postId).then(result=>setData(result));
  },[postId])
  
  
  useEffect(() => {
    if(Data.post){
      setLanguage(Data.post[isLanguage])
    }
  }, [isLanguage, Data]);

  return dataLanguage? (
    
    <div className="main-content">
      <Banner img= {dataLanguage?dataLanguage.img:''} />
      <LazyLoadComponent>
      <Content data={dataLanguage} />
      <HomeSuscribe/>
      </LazyLoadComponent>
    </div>
  ):null;
};

export default Post;
