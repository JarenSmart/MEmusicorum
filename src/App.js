import React, { useState, useRef } from 'react';
//Styles
import "./styles/app.scss";
//Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library"
//Util
import data from './util';

function App() {
  // Ref
  const audioRef = useRef(null);

  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // Handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} songInfo={songInfo} setSongInfo={setSongInfo} />
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}/>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
