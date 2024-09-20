import React from 'react'

function SongCard({ video }) {
  return (
    <div key={video.id.videoId} className="video-item">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="video-info">
                    <p className="video-title">{video.snippet.title}</p>
                  </div>
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    style={{paddingBottom: "6vh"}}
                  />
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </a>
              </div>
  )
}

export default SongCard