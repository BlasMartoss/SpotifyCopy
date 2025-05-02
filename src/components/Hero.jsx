import React, { useState } from "react";
import PlaylistData from "../data/PlaylistData";

function Hero({ onSelectPlaylist }) {
  const hour = new Date().getHours();

  let greeting = "¡Buenas Noches!";
  if (hour >= 5 && hour < 12) greeting = "¡Buenos Días!";
  else if (hour >= 12 && hour < 19) greeting = "¡Buenas Tardes!";

  const [hoverColor, setHoverColor] = useState(null);

  return (
    <section
      className="pt-[60px] p-4 mt-2 rounded-[5px] shadow-[0px_20px_20px_-10px_rgba(0,0,0,0.7)] "
      style={{
        background: `linear-gradient(to bottom, ${
          hoverColor || "#1db954"
        }, #121212)`,
      }}
    >
      <h2 className="text-white text-[30px] font-bold">{greeting}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-4">
        {PlaylistData.slice(0, 6).map((playlist, index) => (
          <div
            key={index}
            className="group cursor-pointer hover:bg-white/20 flex w-full items-center rounded-[5px] bg-white/10 backdrop-blur-md overflow-hidden"
            onClick={() => onSelectPlaylist(playlist)}
            onMouseEnter={() => setHoverColor(playlist.color)}
            onMouseLeave={() => setHoverColor(null)}
          >
            <img
              src={playlist.image}
              alt="Imagen Playlist"
              className="h-18 object-cover rounded-l-[5px] rounded-r-none"
            />
            <p className="text-[20px] text-white pl-4 flex-1">
              {playlist.title}
            </p>
            <div
              onClick={(e) => {
                e.stopPropagation();
                togglePlay(index);
              }}
              className="invisible group-hover:visible cursor-pointer mx-5"
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
