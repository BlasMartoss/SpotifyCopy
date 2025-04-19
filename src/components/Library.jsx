import React from "react";
import { FiBookOpen } from "react-icons/fi";

import PlaylistData from "../data/PlaylistData";

function Library() {
  return (
    <section
      className="bg-[#121212] w-[320px] h-[750px] fixed left-0 m-2 rounded-[10px] px-[20px] "
      style={{ top: "110px" }}
    >
      <div className="  gap-5 flex pt-5 cursor-pointer items-center mb-5 ">
        <FiBookOpen size={24} className="text-[#b3b3b3] " />
        <p className="text-[#b3b3b3] text-[18px] font-bold">Your Library</p>
      </div>

      <div className="flex flex-col  ">
        {PlaylistData.map((playlist, index) => (
          <div
            key={index}
            className="flex gap-4  hover:bg-[#282828] p-2 rounded-[10px] cursor-pointer mb-2"
          >
            <div>
              <img
                src={playlist.image}
                alt="Playlist Image"
                className="h-15 rounded-[5px]"
              />
            </div>
            <div className="flex flex-col ">
              <p className="text-white text-[17px] font-semibold">
                {playlist.title}
              </p>
              <p className="text-[#b3b3b3] text-[14px]">
                {playlist.artists.length > 25
                  ? playlist.artists.slice(0, 25) + "..."
                  : playlist.artists}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Library;
