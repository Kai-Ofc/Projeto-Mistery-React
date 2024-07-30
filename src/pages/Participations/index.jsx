import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from '../../components/SongCard';
import apiKey from '../../services/apiKey';
import channelId from '../../services/channelId';
import VideoPagination from '../../components/VideoPagination'
import TopVideos from '../../components/TopVideos';
import FlowerHeader from '../../components/Elements/flowerHeader'
import styleParticipation from './Participation.module.css'

function Participations() {
  return (
    <div className={styleParticipation.container}>
      <FlowerHeader titulo="PRINCIPAIS PARTICIPAÇÕES"/>
      <TopVideos />
      <FlowerHeader titulo="TODAS AS PARTICIPAÇÕES"/>
      <VideoPagination/>
    </div>
  );
}

export default Participations;