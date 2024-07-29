import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbemItem = ({image,name,desc,id}) => {
  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='w-[240px] p-2 px-3 rounded cursor-pointer text-center hover:bg-[#ffffff26]'>
      <img className ='rounded-full h-[200px] w-full' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbemItem