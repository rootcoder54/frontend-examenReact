import axios from "axios";
import { createContext, useState } from "react";

export const UserContext=createContext()

const UserContextProvider= (props) => {

    const [playliste,setPlayliste]=useState([])

    const [username,setUsername]=useState("")

    const [etat,setEtat]=useState(false)

    const url = 'http://localhost:4000';

    const logout=()=>{
        setEtat(false)
    }

    const inscrire=async(nom,username,password) =>{
        try {
            const user={nom,username,password}
            const response = await axios.post(`${url}/api/user/add`,user);
            
            if(response.data.success){
                //const liste = await axios.get(`${url}/api/playlist/list`);
                //const pliste=liste.data.playlists.find(item=> item.username===username);
                //setPlayliste(pliste)
                setUsername(username)
                setEtat(true)
                return true
            }
            else{
                return false
            }
        } catch (error) {
            
        }
    }

    const login=async (username,password)=>{
            try {
                const response = await axios.get(`${url}/api/user/list`);
                const user=response.data.users.find(user => (user.username === username)&& (user.password === password));
                //setPlayliste(response.data.albums);
                if(user){
                    //const liste = await axios.get(`${url}/api/playlist/list`);
                    //const pliste=liste.data.find(item=> item.username===username);
                    //setPlayliste(pliste)
                    setUsername(username)
                    setEtat(true)
                    return true
                }
                else{
                    return false
                }
            } catch (error) {
                
            }
    }


    const contextValue={
        playliste,
        username,
        etat,
        logout,
        login,
        inscrire
    }
    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;