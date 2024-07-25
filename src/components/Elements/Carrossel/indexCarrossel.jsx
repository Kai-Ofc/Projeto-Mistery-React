import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import apiKey from '../../../services/apiKey';
import styleCarrossel from './Carrossel.module.css';
import channelId from '../../../services/channelId';

function TopVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchTopVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: apiKey,
            channelId: channelId, // Coloque seu ID de canal aqui
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
            thumbnail: item.snippet.thumbnails.high.url, // Escolhendo o tamanho 'high' para melhor qualidade
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#730217'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>,
    prevArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#730217'><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className={styleCarrossel.container}>
      <Slider {...settings} className={styleCarrossel.slider}>
        {videos.map((video) => (
          <div key={video.id} className={styleCarrossel.slideItem}>
            <div className={styleCarrossel.slideInner}>
              <Link
                to={{
                  pathname: '/music',
                  search: `?musica=${encodeURIComponent(JSON.stringify(video))}`
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={styleCarrossel.thumbnail}
                />
                <div className={styleCarrossel.description}>
                  <p>{video.title.toUpperCase()} <span>{video.releaseDate}</span></p>
                  <p>
                    {new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(video.views)} DE VISUALIZAÇÕES{' '}
                    <Link to="/songs">SAIBA MAIS</Link>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TopVideos;
