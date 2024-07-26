import { createContext, useState } from "react";

export const UserContext=createContext()

const UserContextProvider= (props) => {

    const [playliste,setPlayliste]=useState([])

    const [username,setUsername]=useState("John doe")

    const [etat,setEtat]=useState(false)


    const logout=()=>{
        setEtat(false)
    }

    const login=()=>{
        setEtat(true)
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