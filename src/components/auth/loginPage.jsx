import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const LoginPage=()=>{

    const {login}=useContext(UserContext)

    const handler=(e)=>{
        e.preventDefault()
        console.log(new FormData(e.target))
        const resultat=login(e.target.email,e.tartget.password)
        if(resultat==false){
            console.log("erreur")
        }
    }

    return (
        <div 
            className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-800 to-black">
            <div className="px-40 py-10 rounded-xl shadow bg-black flex flex-col space-y-6 items-center text-white bg-gradient-to-b from-black to-zinc-900">
                <img className='w-20' src={assets.spotify_logo} alt='#'></img>
                <h1 className="text-4xl font-bold">J'ai un compte Spotify</h1>
                <form className="space-y-6 w-[358px]" onSubmit={handler}>
                    <div>
                        <label htmlFor="email" className="block text-md font-bold leading-6 text-white">Adresse e-mail ou nom d'utilisateur</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required 
                                className="rounded bg-transparent border border-white w-full py-2 px-2" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Mot de passe</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required 
                                className="rounded bg-transparent border border-white w-full py-2 px-2"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" 
                            className="flex w-full justify-center rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Se Connecter</button>
                    </div>
                    <hr />
                    <div className="text-zinc-200 font-bold">
                        <span>
                            Vous n'avez pas de compte ? {"  "}
                            <Link to="/auth" className="underline">S'inscrire à Spotify</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginPage