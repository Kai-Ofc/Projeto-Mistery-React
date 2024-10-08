import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiKey from '../../services/apiKey';
import channelId from '../../services/channelId';
import styles from './VideoPagination.module.css'; // Importando o módulo CSS
import FlowerHeader from '../Elements/flowerHeader/index';

function Songs({videosParam}) {
  const videos = videosParam;
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 8; // 2 colunas de 4 linhas

  // Calcula o índice inicial e final dos vídeos da página atual
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videosParam.slice(indexOfFirstVideo, indexOfLastVideo);

  // Muda a página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calcula o total de páginas
  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div className={styles.container}>
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




