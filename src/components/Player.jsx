import React, { useContext, useState, useEffect, useRef } from "react";
import {
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { RiVolumeUpFill, RiVolumeMuteFill, RiRepeatFill } from "react-icons/ri";
import { PlayerContext } from "../context/PlayerContext";

function Player() {
  const { currentSong, isPlaying, playNext, playPrev, setIsPlaying } =
    useContext(PlayerContext);

  const [muted, setMuted] = useState(false);
  const [isRepeatActive, setIsRepeatActive] = useState(false);
  const [isShuffleActive, setIsShuffleActive] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(null);

  // Convert secs to min
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  // Sync volume and mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume;
    }
  }, [muted, volume]);

  // Update progress as song plays
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      setProgress(percentage || 0);
    }
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const value = parseFloat(e.target.value);
    if (audio && audio.duration) {
      audio.currentTime = (value / 100) * audio.duration;
      setProgress(value);
    }
  };

  const handleEnded = () => {
    if (isRepeatActive) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      playNext();
    }
  };

  const toggleMute = () => setMuted(!muted);
  const toggleRepeat = () => setIsRepeatActive(!isRepeatActive);
  const toggleShuffle = () => setIsShuffleActive(!isShuffleActive);
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="bg-[#000000] fixed bottom-0 left-0 w-full h-[90px] text-white flex flex-col py-2">
      <audio
        ref={audioRef}
        src={currentSong?.audio || ""}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        autoPlay={isPlaying}
      />

      <div className="flex items-center justify-between h-full px-4">
        {/* Song Info */}
        <div className="flex flex-row min-w-[200px] flex-1 items-center">
          <div className="h-[50px] w-[50px] rounded-[5px] overflow-hidden">
            <img
              src={currentSong?.image || ""}
              alt={currentSong?.title || ""}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col text-white ml-[20px] gap-1">
            <p className="text-[14px] font-semibold truncate">
              {currentSong?.title || ""}
            </p>
            <p className="text-[12px] text-[#8a8a8a]">
              {currentSong?.author || ""}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex-col items-center justify-center flex-1 hidden md:flex">
          <div className="flex items-center justify-center gap-5 mb-1">
            <FaRandom
              onClick={toggleShuffle}
              className={`cursor-pointer text-[20px] ${
                isShuffleActive ? "text-[#1fdf64]" : "text-white"
              }`}
            />
            <FaStepBackward
              onClick={playPrev}
              className="text-white hover:text-gray-300 cursor-pointer"
            />
            <button
              onClick={togglePlay}
              className="bg-white text-black p-2 rounded-full hover:scale-105 transition"
            >
              {isPlaying ? (
                <FaPause className="text-xl" />
              ) : (
                <FaPlay className="text-xl" />
              )}
            </button>
            <FaStepForward
              onClick={playNext}
              className="text-white hover:text-gray-300 cursor-pointer"
            />
            <RiRepeatFill
              onClick={toggleRepeat}
              className={`cursor-pointer text-[20px] ${
                isRepeatActive ? "text-[#1fdf64]" : "text-white"
              }`}
            />
          </div>

          {/* Progress bar with time */}
          <div className="flex items-center justify-center gap-2 mt-2">
            {/* Current time */}
            <span className="text-[12px] mt-1">
              {formatTime(audioRef.current?.currentTime || 0)}
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-[400px] mt-2 accent-white"
            />
            {/* Total duration */}
            <span className="text-[12px] mt-1">
              {formatTime(currentSong?.duration || 0)}
            </span>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center justify-end gap-3 flex-1">
          {muted ? (
            <RiVolumeMuteFill
              onClick={toggleMute}
              className="cursor-pointer text-white"
            />
          ) : (
            <RiVolumeUpFill
              onClick={toggleMute}
              className="cursor-pointer text-white"
            />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-[100px]  accent-white"
          />
        </div>
      </div>
    </section>
  );
}

export default Player;
