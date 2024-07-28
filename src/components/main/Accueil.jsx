import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import Sidebar from "../Sidebar";
import Display from "../Display";
import Player from "../Player";

const Home = () => {
    const { audioRef, track, songsData } = useContext(PlayerContext);
  
    {track && (document.title=track.name)} 
  
    return (
      <div className="h-screen bg-black">
        {songsData.length !== 0 ? (
          <>
            <div className="h-[90%] flex">
              <Sidebar />
              <Display />
            </div>
            <Player />
          </>
        ) : null}
  
        <audio ref={audioRef} src={track ? track.file : ""} preload="auto"></audio>
      </div>
    );
  };

export default Home