import { useContext } from "react";
import Navbar from "./Navbar";
import AlbemItem from "./AlbemItem";
import { PlayerContext } from "../context/PlayerContext";

const DisplaySearch = () => {
    const {songsData, albumsData} = useContext(PlayerContext);
    return (
        <div>
            <Navbar />
            <div className="flex flex-col h-full items-center">
                
            </div>
        </div>
    )
}
export default DisplaySearch