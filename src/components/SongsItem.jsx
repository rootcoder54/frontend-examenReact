import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongsItem = ({name,image,desc,id}) => {
const{playWithID} = useContext(PlayerContext)

  return (
    <div onClick={()=>playWithID(id)} className='w-[280px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded h-[250px] w-[280px]' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongsItem