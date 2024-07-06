import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from '../../components/SongCard';
import apiKey from '../../services/apiKey';
import channelId from '../../services/channelId';

function Songs() {

  const[videos, setVideos] = useState([])

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
        setVideos(response.data.items);
      } catch (error) {
        console.log("Erro ao carregar videos: " + error)
      }
    }
    fetchVideos();
  }, []) 

  return (
    <div>
      {
        videos.map((video) => (
          <SongCard video={video}  />
        ))
      }
    </div>
  );

}

export default Songs