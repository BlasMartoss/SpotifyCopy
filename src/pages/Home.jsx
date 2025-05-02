import React, { useState } from "react";
import Player from "../components/Player";
import Menu from "../components/Menu";
import Library from "../components/Library";
import Hero from "../components/Hero";
import Playlist from "../components/Playlist";

function Home() {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  return (
    <section className="bg-black h-screen relative flex">
      <div className="hidden md:block fixed top-0 left-0 z-10">
        <Menu />
        <Library onSelectPlaylist={setSelectedPlaylist} />
      </div>

      <div className="flex-1 md:ml-[340px] relative overflow-hidden z-0">
        {!selectedPlaylist && <Hero onSelectPlaylist={setSelectedPlaylist} />}
        {selectedPlaylist && (
          <Playlist
            playlist={selectedPlaylist}
            onClose={() => setSelectedPlaylist(null)}
            className="z-20"
          />
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50">
        <Player />
      </div>
    </section>
  );
}

export default Home;
