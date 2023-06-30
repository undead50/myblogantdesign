import React from 'react';
import ReactPlayer from 'react-player';
import './player.css';
import { useSelector } from 'react-redux';

function VideoPlayer() {
  const videoId = useSelector((state) => {
    return state.video.videoId;
  });

  const videoSrc = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <ReactPlayer
      url={videoSrc}
      className="player_css"
      controls
    />
  );
}

export default VideoPlayer;
