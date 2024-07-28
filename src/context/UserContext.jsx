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

    const login=async (username,password)=>{
            try {
                const response = await axios.get(`${url}/api/user/list`);
                const user=response.data.users.find(user => (user.username === username)&& (user.password === password));
                //setPlayliste(response.data.albums);
                if(user){
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
        login
    }
    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;