import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from '../../components/SongCard';
import apiKey from '../../services/apiKey';
import channelId from '../../services/channelId';
import Music from '../../pages/Music';
import { Link } from 'react-router-dom'
import FlowerHeader from '../Elements/FlowerHeader/index';
import styleTopVideos from './TopVideos.module.css'
import Carrosel from './../Elements/Carrossel/indexCarrossel'

function TopVideos() {

return (
  <div className={styleTopVideos.container}>
    <Carrosel/>
  </div>
);
}

export default TopVideos