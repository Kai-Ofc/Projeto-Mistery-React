import React from 'react'
import ChannelSocialMedias from '../../components/SocialMedias';
import styleAbout from './About.module.css'
import FlowerHeader from '../../components/Elements/FlowerHeader';

function About() {
  return (
    <div className={styleAbout.container}>
      <ChannelSocialMedias />
      <FlowerHeader titulo="INSPIRAÇÕES"/>
      <span className={styleAbout.inspirationSpan}>PRINCIPAIS INSPIRAÇÕES:
      <br />
      SIA | MELANIE MARTINES | ASHINIKKO 
      <div className={styleAbout.line}></div>
      INSTRUMENTAL
      <br />
      ASHINIKKO | MELANIE MARTINEZ 
      <div className={styleAbout.line}></div>
      VOCAL:
      <br />
      SIA | HALACG 
      <div className={styleAbout.line}></div>
      ESTILO MUSICAL:
      <br />
       HALACG </span>
    </div>
  )
}

export default About