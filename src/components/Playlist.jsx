import React, { useState, useEffect, useContext } from "react";
import { IoChevronBack, IoClose } from "react-icons/io5";
import { FaPause, FaPlay } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import SongData from "../data/Songs";
import ArtistData from "../data/Artists";
import Artist from "./Artist";
import { PlayerContext } from "../context/PlayerContext";

function Playlist({ playlist, onClose }) {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isLgUp, setIsLgUp] = useState(false);

  const songs = SongData.filter((song) => song.playlistId === playlist.id);
  const { playSong, currentSong, isPlaying, setIsPlaying } =
    useContext(PlayerContext);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsLgUp(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const togglePlay = () => {
    if (currentSong && songs.some((song) => song.id === currentSong.id)) {
      setIsPlaying(!isPlaying);
    } else if (songs.length > 0) {
      playSong(songs[0], songs);
    }
  };

  const getArtistData = (artistName) => {
    return ArtistData.find((artist) => artist.name === artistName);
  };

  return (
    <div
      className="absolute top-0 left-0 z-50 mt-2 rounded-[5px] flex overflow-hidden transition-all duration-300"
      style={{
        height: "calc(100vh - 80px)",
        width: "100%",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${playlist.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(30px)",
          opacity: 0.5,
        }}
      ></div>

      <div className="relative z-10 p-6 w-full overflow-y-auto">
        <button
          onClick={onClose}
          className="h-8 bg-black p-2 rounded-[50%] cursor-pointer"
        >
          <IoChevronBack className="text-white" />
        </button>

        <div className="flex flex-col mt-5 xl:flex-row xl:items-end items-center">
          <div>
            <img
              src={playlist.image}
              alt="Imagen Playlist"
              className="h-[250px] w-[250px] object-cover rounded-2xl"
            />
          </div>
          <div className="lg:ml-5">
            <p className="text-[20px] lg-text-[25px] font-semibold text-white mt-2">
              Playlist
            </p>
            <h1 className="text-[40px] lg:text-[60px] font-bold text-white m-0">
              {playlist.title}
            </h1>
            <p className="text-[15px] text-white">{playlist.artists}</p>
            <p className="text-[15px] font-semibold text-white">
              {playlist.likes} - {playlist.numeroCanciones} songs, un total de{" "}
              {playlist.time}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <button
            onClick={togglePlay}
            className="bg-white text-black p-2 rounded-full hover:scale-105 transition"
          >
            {isPlaying &&
            currentSong &&
            songs.some((song) => song.id === currentSong.id) ? (
              <FaPause className="text-xl" />
            ) : (
              <FaPlay className="text-xl" />
            )}
          </button>
        </div>

        <div className="mt-6 overflow-y-auto px-5">
          <ul>
            <li className="grid grid-cols-12 py-2 border-b border-white mb-5">
              <div className="col-span-1 text-white">#</div>
              <div className="col-span-6 text-sm font-semibold text-white">
                Title
              </div>
              <div className="col-span-3 text-xs text-gray-300">Album</div>
              <div className="col-span-2 text-xs text-white flex items-center justify-end pr-2">
                <FiClock className="inline-block mr-1 text-2xl" />
              </div>
            </li>

            {songs.map((song, index) => (
              <li
                key={song.id}
                className="grid grid-cols-12 py-2 mb-2 hover:bg-gray items-center cursor-pointer "
                onClick={() => {
                  if (isLgUp) {
                    setSelectedArtist(getArtistData(song.author));
                    setSelectedSong(song);
                  }
                  playSong(song, songs);
                }}
              >
                <div className="col-span-1 text-white">{index + 1}</div>
                <div className="col-span-6 flex items-center">
                  <div className="w-12 h-12 bg-gray-300 mr-2">
                    <img src={song.image} alt="" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white cursor-pointer">
                      {song.title}
                    </p>
                    <p className="text-xs text-gray-300">{song.author}</p>
                  </div>
                </div>
                <div className="col-span-3 text-xs text-gray-300">
                  {song.album}
                </div>
                <div className="col-span-2 text-xs text-white text-right pr-3">
                  {Math.floor(song.duration / 60)}:
                  {String(song.duration % 60).padStart(2, "0")}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isLgUp && selectedArtist && selectedSong && (
        <div className="w-[420px] bg-[#121212] text-white relative z-50 overflow-y-auto">
          <button
            onClick={() => {
              setSelectedArtist(null);
              setSelectedSong(null);
            }}
            className="absolute top-2 right-2 text-white text-xl"
          >
            <IoClose />
          </button>
          <Artist
            artist={selectedArtist}
            songImage={selectedSong.image}
            songTitle={selectedSong.title}
          />
        </div>
      )}
    </div>
  );
}

export default Playlist;
