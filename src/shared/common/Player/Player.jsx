import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import styles from "./Player.module.scss";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div
      style={{ position: "relative", textAlign: "center", marginTop: "20px" }}
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=YXjx-Kaj5RM"
        playing={isPlaying}
        volume={volume}
        controls={false}
        width="0"
        height="0"
      />
      <div className={styles.videoPlayButton} onClick={togglePlayPause}>
        {isPlaying ? <span className={styles.pauseIcon}></span> : <span></span>}
      </div>
      <div style={{ marginTop: "100px" }}>
        <div className={styles.Range}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            style={{ width: "250px", height: '10px' }}
          />
        </div>
        {/* <span style={{ marginLeft: "10px" }}>{Math.round(volume * 100)}%</span> */}
      </div>
    </div>
  );
};

export default Player;
