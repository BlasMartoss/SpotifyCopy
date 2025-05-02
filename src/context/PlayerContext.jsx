// src/context/PlayerContext.js
import React, { createContext, useState, useRef } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const playSong = (song, songs) => {
    if (currentSong?.id !== song.id) {
      audioRef.current.pause();
      audioRef.current = new Audio(song.url);
      setCurrentSong(song);
      setPlaylistSongs(songs);
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      // Toggle play/pause
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const playNext = () => {
    const currentIndex = playlistSongs.findIndex(
      (s) => s.id === currentSong.id
    );
    const nextSong = playlistSongs[currentIndex + 1];
    if (nextSong) {
      playSong(nextSong, playlistSongs);
    }
  };

  const playPrev = () => {
    const currentIndex = playlistSongs.findIndex(
      (s) => s.id === currentSong.id
    );
    const prevSong = playlistSongs[currentIndex - 1];
    if (prevSong) {
      playSong(prevSong, playlistSongs);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playSong,
        playNext,
        playPrev,
        setIsPlaying,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
