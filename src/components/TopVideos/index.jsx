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

  
const [videos, setVideos] = useState([]);

useEffect(() => {
  const fetchTopVideos = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: apiKey,
          channelId: channelId,
          part: 'snippet',
          order: 'viewCount',
          maxResults: 3,
          type: 'video'
        }
      });

      if (response.status !== 200) {
        throw new Error('Falha ao carregar os vídeos');
      }

      // Obtemos os IDs dos vídeos para buscar as estatísticas
      const videoIds = response.data.items.map(item => item.id.videoId).join(',');
      console.log('videoIds',videoIds)

      // Fazemos outra requisição para buscar as estatísticas
      const statsResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          key: apiKey,
          id: videoIds,
          part: 'statistics'
        }
      });
      console.log('statsResponse',statsResponse)

      if (statsResponse.status !== 200) {
        throw new Error('Falha ao carregar as estatísticas dos vídeos');
      }

      // Combinamos os dados dos vídeos com as estatísticas
      const videosWithStats = response.data.items.map(item => {
        const video = {
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
          views: statsResponse.data.items.find(stats => stats.id === item.id.videoId).statistics.viewCount
        };
        return video;
      });

      setVideos(videosWithStats);
    } catch (error) {
      console.error('Erro ao buscar vídeos:', error);
    }
  };

  fetchTopVideos();
}, [channelId, apiKey]);

let teste = {
  id: '1',
  tittle: "titulo"
}

return (
  <div className={styleTopVideos.container}>
    <FlowerHeader titulo="PRINCIPAIS MÚSICAS"/>
    {/* <ul>
      {videos.map((video) => (
        <li key={video.id}>
        <Link to={{
        pathname: '/music',
        search: `?musica=${encodeURIComponent(JSON.stringify(video))}`
      }}>Ver Detalhes do Produto</Link>
            <img 
              onClick={() => {
                    <Music 
                      key = {video.id}
                      video = {video}
                    />
              }}

              src={video.thumbnail}
              alt={video.title}
            />
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>*/}
            {/*<div>{video.title}</div>
            <div>Visualizações: {video.views}</div>

            
        </li>
        <SongCard video={video} />
      ))}
    </ul> */}
    <Carrosel/>
  </div>
);
}

export default TopVideos