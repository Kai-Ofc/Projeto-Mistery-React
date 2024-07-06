import React, { useEffect, useState } from 'react';
import TopVideos from '../../components/TopVideos';
import ChannelSocialMedias from '../../components/SocialMedias';

function Home() {
  return(
    <>
      <ChannelSocialMedias />
      <TopVideos />
    </>
  );
}

export default Home