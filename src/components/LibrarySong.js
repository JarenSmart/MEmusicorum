import React from "react";

const LibrarySong = ({ song }) => {
  return (
    <div className="library-song-container">
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
