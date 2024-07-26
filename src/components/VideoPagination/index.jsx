// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SongCard from '../../components/SongCard';
// import apiKey from '../../services/apiKey';
// import channelId from '../../services/channelId';

// function Songs() {
//   const [videos, setVideos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const videosPerPage = 8;

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//           params: {
//             part: 'snippet',
//             channelId: channelId,
//             key: apiKey,
//             maxResults: 100,
//             type: 'video',
//           },
//         });
//         setVideos(response.data.items);
//       } catch (error) {
//         console.log("Erro ao carregar vídeos: " + error);
//       }
//     };
//     fetchVideos();
//   }, []);

//   // Calcula o índice inicial e final dos vídeos da página atual
//   const indexOfLastVideo = currentPage * videosPerPage;
//   const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
//   const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

//   // Muda a página
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       {currentVideos.map((video) => (
//         <SongCard key={video.id.videoId} video={video} />
//       ))}

//       {/* Paginação */}
//       <div style={{ marginTop: '20px' }}>
//         {Array.from({ length: Math.ceil(videos.length / videosPerPage) }, (_, index) => (
//           <button key={index} onClick={() => paginate(index + 1)} style={{ marginRight: '5px' }}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Songs;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiKey from '../../services/apiKey';
import channelId from '../../services/channelId';
import styles from './VideoPagination.module.css'; // Importando o módulo CSS
import FlowerHeader from '../Elements/FlowerHeader/index';

function Songs() {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 8; // 2 colunas de 4 linhas

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

  // Calcula o índice inicial e final dos vídeos da página atual
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Muda a página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calcula o total de páginas
  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div className={styles.container}>
      <FlowerHeader titulo="TODAS AS MÚSICAS"/>
      <div className={styles.gridContainer}>
        {currentVideos.map((video) => (
          <div key={video.id.videoId} className={styles.thumbnail}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`${styles.pageButton} ${currentPage === index + 1 ? styles.pageButtonActive : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Songs;




