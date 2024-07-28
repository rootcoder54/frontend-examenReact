import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
    const navigate = useNavigate()
    const {logout,login, etat,username}=useContext(UserContext)

  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
            </div>
            <div className='flex items-center gap-4'>
                {etat ?
                    (
                        <div>
                            <span className='bg-black py-4 px-6 rounded-2xl text-[15px] cursor-pointer'>{username}</span>
                            <button onClick={logout} className='bg-white py-3 px-6 rounded-2xl text-[15px] text-black cursor-pointer'>deconnexion</button>
                        </div>
                        ):
                    (
                        <div className='flex gap-8 items-center'>
                            <button>
                                S'inscrire
                            </button>
                            <button onClick={()=>navigate("/auth/login")} 
                                    className='bg-white py-3 px-9 rounded-3xl text-[15px] cursor-pointer text-black'>
                                        connexion
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    </>
  )
}

export default Navbar