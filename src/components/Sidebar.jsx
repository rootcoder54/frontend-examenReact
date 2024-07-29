import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const Sidebar = () => {

    const navigate = useNavigate();
    const {logout,login, etat,username,playliste}=useContext(UserContext)

  return (
    <div className='w-[425px] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={()=> navigate('/')} className='flex item-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt='#'></img>
                <p className='font-bold'>Accueil</p>
            </div>
            <div onClick={()=> navigate('/recherche')} className='flex item-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt='#'></img>
                <p className='font-bold'>Rechercher</p>
            </div>
        </div>

        <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src ={assets.stack_icon} alt='#' />
                    <p className='font-bold'>Bibliotheque</p>
                </div>
                <div className='flex item-center gap-3'>
                    {etat &&(
                        <img className='w-5' src={assets.plus_icon}/>
                    )}
                </div>
            </div>
            {etat ? (
                playliste.map((item, index)=>(
                    <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                        <h1>{item.name}</h1>
                        <p className='font-light'>It's easy we will help you</p>
                        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                    </div>
                ))
            ) : (
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Playliste</h1>
                    <p className='font-light'>Il faut se connecter</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default Sidebar