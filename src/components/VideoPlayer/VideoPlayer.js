import React from 'react';
import ReactPlayer from 'react-player';
import './player.css';

function VideoPlayer() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      className="player_css"
    />
  );
}

export default VideoPlayer;
