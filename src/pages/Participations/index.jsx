import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from '../../components/SongCard';
import apiKey from '../../services/apiKey';
import channelId from '../../services/channelId';
import VideoPagination from '../../components/VideoPagination'
import TopVideos from '../../components/TopVideos';
import FlowerHeader from '../../components/Elements/FlowerHeader'
import styleSong from './Songs.module.css'

function Participações() {
  return (
    <div className={styleSong.container}>
      <FlowerHeader titulo="PRINCIPAIS PARTICIPAÇÕES"/>
      <TopVideos />
      <FlowerHeader titulo="TODAS AS PARTICIPAÇÕES"/>
      <VideoPagination/>
    </div>
  );
}

export default Participações;