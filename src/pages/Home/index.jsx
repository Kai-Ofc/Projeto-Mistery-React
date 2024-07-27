import React, { useEffect, useState } from 'react';
import TopVideos from '../../components/TopVideos';
import ChannelSocialMedias from '../../components/SocialMedias';
import FlowerHeader from '../../components/Elements/FlowerHeader'
import styleHome from './Home.module.css'

function Home() {
  return(
    <div className={styleHome.container}>
      <ChannelSocialMedias />
      <FlowerHeader titulo="PRINCIPAIS MÚSICAS"/>
      <TopVideos />
      <FlowerHeader titulo="PRINCIPAIS PARICIPAÇÕES"/>
      <TopVideos />
      <FlowerHeader titulo="EQUIPE"/>
    </div>
  );
}

export default Home