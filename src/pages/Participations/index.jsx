import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from '../../components/SongCard';
import apiKey from '../../services/apiKey';
import channelId from '../../services/channelId';
import VideoPagination from '../../components/VideoPagination'
import TopParticipacoes from '../../components/TopParticipacoes';
import FlowerHeader from '../../components/Elements/flowerHeader'
import styleParticipation from './Participations.module.css'

function Participations() {
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
          params: {
            part: 'snippet,contentDetails',
            playlistId: 'PLNamTFH3xVWCDCcfBRgGhCXA5rInDgjcK',
            key: apiKey,
            maxResults: 50,
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
    <div className={styleParticipation.container}>
      <FlowerHeader titulo="PRINCIPAIS PARTICIPAÇÕES"/>
      <TopParticipacoes />
      <FlowerHeader titulo="TODAS AS PARTICIPAÇÕES"/>
      <VideoPagination videosParam={videos}/>
    </div>
  );
}

export default Participations;