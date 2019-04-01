import'./ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) =>{

  const images = props.images.map((image)=>{
    return <ImageCard key ={image.id} image = {image} />;
//returns long url
  });


  return <div className = "image-list">{images}</div>;
};

export default ImageList;


/*
import React from 'react';

const ImageList = (props) =>{

  const images = props.images.map(({description,id,urls})=>{ //destructring it so we dont need the image before the image.desc, image. id etc.
    return <img alt = {description}key = {id} src = {urls.regular} />;
//returns long url
  });


  return <div>{images}</div>;
};

export default ImageList;
*/
