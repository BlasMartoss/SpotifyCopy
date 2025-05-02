import React from "react";
import "./styles/style.css";
import { PlayerProvider } from "../src/context/PlayerContext";
import Home from "./pages/Home";
function App() {
  return (
    <PlayerProvider>
      <Home />
    </PlayerProvider>
  );
}
export default App;
