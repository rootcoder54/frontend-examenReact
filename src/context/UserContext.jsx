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

    const login=async ()=>{
        try {
            const response = await axios.get(`${url}/api/album/list`);
            setPlayliste(response.data.albums);
            setUsername("John doe")
            setEtat(true)
        } catch (error) {
            
        }
    }


    const contextValue={
        playliste,
        username,
        etat,
        logout,
        login
    }
    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;