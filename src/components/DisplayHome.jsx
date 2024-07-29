import React from 'react'
import Navbar from './Navbar'
import AlbemItem from './AlbemItem'
import SongsItem from './SongsItem'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {

  const {songsData, albumsData} = useContext(PlayerContext);
  const songs=songsData.slice(0, 6);

  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Liste des Albums</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item,index)=>(<AlbemItem key={index} name={item.name} desc={item.desc}  id={item._id} image={item.image} />))}
        </div> 
      </div>

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Musique les plus ecouter</h1>
        <div className='flex overflow-auto'>
          {songs.map((item, index)=>(<SongsItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}
        </div> 
      </div>
    </>
  )
}

export default DisplayHome