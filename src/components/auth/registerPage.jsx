import { Link, useNavigate } from "react-router-dom"
import { assets } from "../../assets/assets"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import axios from "axios"

const RegisterPage=()=>{

    document.title="login"

    const navigate = useNavigate()

    const {inscrire}=useContext(UserContext)

    const url = 'http://localhost:4000'

    const [nom,setNom]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [confpassword,setconfPassword]=useState("")
    const [erreur,setErreur]=useState()

    const handlerNom=(e)=>{
        setNom(e.target.value)
    }

    const handlerUsername=(e)=>{
        setUsername(e.target.value)
    }

    const handlerPassword=(e)=>{
        setPassword(e.target.value)
    }

    const handlerconfPassword=(e)=>{
        setconfPassword(e.target.value)
    }

    const handler=async ()=>{
        if(password!==confpassword){
            setErreur("Les mot de passe sont differents")
        }
        else{
            const resultat=inscrire(nom,username,password)
            if(resultat){
                navigate("/")
            }
            else{
                setErreur("Probleme de connexion")
            }
        }
    }

    return (
        <div 
            className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-800 to-black">
            <div className="px-40 py-10 rounded-xl shadow bg-black flex flex-col space-y-6 items-center text-white bg-gradient-to-b from-black to-zinc-900">
                <img className='w-20' src={assets.spotify_logo} alt='#'></img>
                <h1 className="text-4xl font-bold">J'ai un compte Spotify</h1>
                <form className="space-y-6 w-[358px]">
                    <div>
                        <label htmlFor="nom" className="block text-md font-bold leading-6 text-white">Nom complet</label>
                        <div className="mt-2">
                            <input name="nom" type="text"  required onChange={handlerNom} value={nom}
                                className="rounded bg-transparent border border-white w-full py-2 px-2" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="login" className="block text-md font-bold leading-6 text-white">Adresse e-mail ou nom d'utilisateur</label>
                        <div className="mt-2">
                            <input name="login" type="text"  required onChange={handlerUsername} value={username}
                                className="rounded bg-transparent border border-white w-full py-2 px-2" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Mot de passe</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" required 
                                value={password} onChange={handlerPassword}
                                className="rounded bg-transparent border border-white w-full py-2 px-2"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Confirmer Mot de passe</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" required 
                                value={confpassword} onChange={handlerconfPassword}
                                className="rounded bg-transparent border border-white w-full py-2 px-2"/>
                        </div>
                    </div>

                    {erreur && (
                        <div className="bg-red-500 px-2 py-2 text-center rounded-lg text-white">
                            <p>{erreur}</p>
                        </div>
                    )}

                    <div>
                        <button type="button" onClick={handler}
                            className="flex w-full justify-center rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">S'inscrire</button>
                    </div>
                    <hr />
                    <div className="text-zinc-200 font-bold">
                        <span>
                            <Link to="/login" className="underline">Se connecter à Spotify</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RegisterPage