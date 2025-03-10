import React from 'react';
import GridBlogContainer from '../components/NoticeBlogCard/GridBlogContainer.jsx';
import image from '../assets/classroom.jpg';

function Home() {
  return (
    <GridBlogContainer
      imageUrl1={image}
      title1='Mezcla perfecta de naturaleza y salud'
      content1='EL senderismo es una actividad física aeróbica, que tonifica, relaja y permite conocer lugares únicos'
      imageUrl2={image}
      title2='Mezcla perfecta de naturaleza y salud'
      content2='EL senderismo es una actividad física aeróbica, que tonifica, relaja y permite conocer lugares únicos'
      imageUrl3={image}
      title3='Mezcla perfecta de naturaleza y salud'
      content3='EL senderismo es una actividad física aeróbica, que tonifica, relaja y permite conocer lugares únicos'
    />
  );
}

export default Home;
