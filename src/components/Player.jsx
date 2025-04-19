import React, { useState } from "react";
import SongImage from "../assets/images/song-example.webp";
import {
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { RiVolumeUpFill, RiVolumeMuteFill, RiRepeatFill } from "react-icons/ri";

function Player() {
  const [muted, setMuted] = useState(false);
  const [isRepeatActive, setIsRepeatActive] = useState(false);
  const [isShuffleActive, setIsShuffleActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMute = () => setMuted(!muted);
  const toggleRepeat = () => setIsRepeatActive(!isRepeatActive);
  const toggleShuffle = () => setIsShuffleActive(!isShuffleActive);
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="bg-[#000000] fixed bottom-0 left-0 w-full h-[90px] text-white flex flex-col py-2">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left: Song info */}
        <div className="flex flex-row min-w-[200px] flex-1 items-center">
          <img src={SongImage} alt="" className="h-15 rounded-[5px]" />
          <div className="flex flex-col text-white ml-[20px] gap-1">
            <p className="w-[150px] text-[12px] md:text-[15px]">Mockingbird</p>
            <p className="w-[100px] text-[12px] md:text-[15px] text-[#8a8a8a] hover:underline hover:text-white cursor-pointer">
              Eminem
            </p>
          </div>
        </div>

        {/* Center: Playback controls */}
        <div className="flex-col items-center justify-center flex-1 hidden md:flex">
          <div className="flex items-center justify-center gap-5">
            <FaRandom
              onClick={toggleShuffle}
              className={`cursor-pointer text-[20px] ${
                isShuffleActive ? "text-[#1fdf64]" : "text-white"
              } hover:text-[#1fdf64]`}
            />
            <FaStepBackward className="text-white hover:text-gray-300 cursor-pointer" />
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
            <FaStepForward className="text-white hover:text-gray-300 cursor-pointer" />
            <RiRepeatFill
              onClick={toggleRepeat}
              className={`cursor-pointer text-[20px] ${
                isRepeatActive ? "text-[#1fdf64]" : "text-white"
              } hover:text-[#1fdf64]`}
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <p>0:00</p>
            <input
              className="w-full hidden md:flex h-1 rounded range-slider accent-white"
              type="range"
            />
            <p>3:24</p>
          </div>
        </div>

        {/* Right: Volume and play button */}
        <div className="flex items-center justify-end gap-3 flex-1">
          <RiRepeatFill
            onClick={toggleRepeat}
            className={`cursor-pointer text-[20px] md:hidden ${
              isRepeatActive ? "text-[#1fdf64]" : "text-white"
            } hover:text-[#1fdf64]`}
          />

          <FaRandom
            onClick={toggleShuffle}
            className={`cursor-pointer text-[20px] md:hidden ${
              isShuffleActive ? "text-[#1fdf64]" : "text-white"
            } hover:text-[#1fdf64]`}
          />

          {muted ? (
            <RiVolumeMuteFill
              onClick={toggleMute}
              className="text-white hover:text-gray-300 cursor-pointer text-[20px]"
            />
          ) : (
            <RiVolumeUpFill
              onClick={toggleMute}
              className="text-white hover:text-gray-300 cursor-pointer text-[20px]"
            />
          )}

          <button
            onClick={togglePlay}
            className="bg-white text-black p-2 rounded-full md:hidden hover:scale-105 transition"
          >
            {isPlaying ? (
              <FaPause className="text-[10px]" />
            ) : (
              <FaPlay className="text-[10px]" />
            )}
          </button>

          <input
            type="range"
            className="hidden md:flex h-1 w-[150px] rounded range-slider accent-white"
          />
        </div>
      </div>

      {/* Bottom (solo móvil): progreso */}
      <div className="w-full px-4 md:hidden">
        <input
          type="range"
          className="w-full h-1 rounded range-slider accent-white"
        />
      </div>
    </section>
  );
}

export default Player;
