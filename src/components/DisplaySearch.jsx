import { useContext, useState } from "react";
import Navbar from "./Navbar";
import AlbemItem from "./AlbemItem";
import { PlayerContext } from "../context/PlayerContext";
import SongsItem from "./SongsItem";

const DisplaySearch = () => {
    const {songsData, albumsData} = useContext(PlayerContext);
    const [search,setSearch]=useState("")
    const [song,setSong]=useState(songsData)

    const recherche=(e)=>{
        setSearch(e.target.value)
        const songt= songsData.filter(chanson =>
            chanson.name.toLowerCase().includes(search) ||
            chanson.desc.toLowerCase().includes(search) ||
            chanson.album.toLowerCase().includes(search) 
        );
        setSong(songt)
    }
    return (
        <div>
            <Navbar />
            <div className="flex flex-col h-full">
                <div className="mt-5">
                    <form>
                        <input type="text" name="recherche" value={search} onChange={recherche}
                            className="py-3 px-5 bg-zinc-800 rounded-md w-[500px]" placeholder="Recherche"
                        />
                    </form>
                </div>
                <div className='mb-4'>
                    <h1 className='my-5 font-bold text-2xl'>Toutes les musiques</h1>
                    <div className='grid grid-cols-4 gap-4'>
                    {song.map((item, index)=>(<SongsItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default DisplaySearch