import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from '../../components/SongCard';
import apiKey from '../../services/apiKey';
import channelId from '../../services/channelId';
import VideoPagination from '../../components/VideoPagination'
import TopVideos from '../../components/TopVideos';
import FlowerHeader from '../../components/Elements/flowerHeader'
import styleSong from './Songs.module.css'

function Songs() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            channelId: channelId,
            key: apiKey,
            maxResults: 100,
            type: 'video',
          },
        });
        const sortedVideos = response.data.items.sort((a, b) => {
          // Ordena por data, do mais recente para o mais antigo
          return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
        });
        setVideos(sortedVideos);
      } catch (error) {
        console.log("Erro ao carregar vídeos: " + error);
      }
    };
    fetchVideos();
  }, []);


  return (
    <div className={styleSong.container}>
      <FlowerHeader titulo="PRINCIPAIS MÚSICAS"/>
      <TopVideos />
      <FlowerHeader titulo="TODAS AS MÚSICAS"/>
      <VideoPagination videosParam={videos}/>
    </div>
  );
}

export default Songs;