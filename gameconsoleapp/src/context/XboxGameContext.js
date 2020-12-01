import Axios from "axios";
import { createContext, useEffect, useState } from "react";

export const XboxGameContext = createContext();

export const XboxGameProvider = (props) => {
    const [xboxGames, setXboxGames] = useState([
        {
            id: "",
            title: "",
            price: 0,
            category: "",
            console: "",
        }
    ]);

    const [xboxGame, setXboxGame] = useState({id: "id", title: "title", price: 0, category: "category", console: "console"})

    useEffect (() => {
        const url = "https://localhost:5001/games";
        Axios.get(url).then(response => {
            setXboxGames(response.data)
        })
    }, []) 

    return (
        <XboxGameContext.Provider value={{xboxGames: [xboxGames, setXboxGames], xboxGame: [xboxGame, setXboxGame]}}>
            {props.children}
        </XboxGameContext.Provider>
    )
}