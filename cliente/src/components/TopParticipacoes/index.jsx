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

  const playlistId = 'PLNamTFH3xVWCDCcfBRgGhCXA5rInDgjcK'

  useEffect(() => {
    const fetchTopVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
          params: {
            key: apiKey,
            playlistId: playlistId,
            part: 'contentDetails',
            maxResults: 50, // Adjust as needed, max 50 per request
          },
        });

        const videoIds = response.data.items.map(item => item.contentDetails.videoId).join(',');

        // Step 2: Get video details including view count
        const videoDetailsResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            key: apiKey,
            id: videoIds,
            part: 'snippet,statistics',
          },
        });

        const videos = videoDetailsResponse.data.items;

        // Step 3: Sort videos by view count and get top 3
        const topVideos = videos.sort((a, b) => b.statistics.viewCount - a.statistics.viewCount).slice(0, 3);

        // Step 4: Format the video data
        const formattedVideos = topVideos.map(video => ({
          id: video.id,
          releaseDate: new Date(video.snippet.publishedAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
          thumbnail: video.snippet.thumbnails.high.url,
          title: video.snippet.title,
          views: video.statistics.viewCount,
        }));

        setVideos(formattedVideos);
        console.log(videos)
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