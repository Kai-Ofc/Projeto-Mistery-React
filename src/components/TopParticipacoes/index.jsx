import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from '../../components/SongCard';
import apiKey from '../../services/apiKey';
import channelId from '../../services/channelId';
import Music from '../../pages/Music';
import { Link } from 'react-router-dom'
import FlowerHeader from '../Elements/flowerHeader/index';
import styleTopVideos from './TopVideos.module.css'
import Carrosel from './../Elements/Carrossel/indexCarrossel'

function TopParticipacoes() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchTopVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: apiKey,
            playlistId: 'PLNamTFH3xVWCDCcfBRgGhCXA5rInDgjcK',
            part: 'snippet',
            order: 'viewCount',
            maxResults: 3,
            type: 'video'
          }
        });

        if (response.status !== 200) {
          throw new Error('Falha ao carregar os vídeos');
        }

        // Obtemos os IDs dos vídeos para buscar as estatísticas e detalhes
        const videoIds = response.data.items.map(item => item.id.videoId).join(',');

        // Fazemos outra requisição para buscar as estatísticas e detalhes dos vídeos
        const videosDetailsResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            key: apiKey,
            id: videoIds,
            part: 'snippet,statistics'
          }
        });

        if (videosDetailsResponse.status !== 200) {
          throw new Error('Falha ao carregar os detalhes dos vídeos');
        }

        // Combinamos os dados dos vídeos com os detalhes
        const videosWithDetails = response.data.items.map((item, index) => {
          const video = {
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            views: videosDetailsResponse.data.items[index].statistics.viewCount,
            releaseDate: new Date(item.snippet.publishedAt).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          };
          return video;
        });

        setVideos(videosWithDetails);
      } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
      }
    };

    fetchTopVideos();
  }, []);

return (
  <div className={styleTopVideos.container}>
    <Carrosel videosParam={videos}/>
  </div>
);
}

export default TopParticipacoes