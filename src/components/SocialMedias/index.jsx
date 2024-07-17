import React from 'react';
import styleSocialMedia from './SocialMedias.module.css'
import FlowerHeader from '../Elements/flowerHeader/index';

const ChannelSocialMedias = () => {
    
    return (
      <div className={styleSocialMedia.socialDiv}>
        <FlowerHeader titulo="SOBRE"/>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/5tXGJbbT8kC46qteRRIwGx">Spotify</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://music.youtube.com/channel/UCzvYWzqkojYsbzvPizXoskg">Youtube Music</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://music.apple.com/us/artist/mistery/1589648809">Apple Music</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.deezer.com/en/artist/1251390">Deezer</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/MsMisttery">Twitter</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mistery.officiall">Instagram</a></li>
        </ul>
      </div>
    );
  };
  
  export default ChannelSocialMedias;