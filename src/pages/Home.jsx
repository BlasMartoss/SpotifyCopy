import React from "react";
import Player from "../components/Player";
import Menu from "../components/Menu";
import Library from "../components/Library";
function Home() {
  return (
    <section className="bg-black h-screen relative ">
      <Menu />
      <Library />
      <Player />
    </section>
  );
}

export default Home;
