import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from '../../components/SongCard';
import apiKey from '../../services/apiKey';
import channelId from '../../services/channelId';
import VideoPagination from '../../components/VideoPagination'
import TopVideos from '../../components/TopVideos';

function Songs() {
  return (
    <div>
      <TopVideos />
      <VideoPagination/>
    </div>
  );
}

export default Songs;