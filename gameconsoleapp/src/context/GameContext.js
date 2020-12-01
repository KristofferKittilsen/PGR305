import Axios from "axios";
import { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
    const [Games, setGames] = useState([
        {
            id: "",
            title: "",
            price: 0,
            category: "",
            console: "",
            description: "",
            subtitle: "",
            pg: "",
            links: [],
        }
    ]);

    const [Game, setGame] = useState({id: "id", title: "title", price: 0, category: "category", console: "console", description: "description", subtitle: "subtitle", pg: "pg", links: []})

    useEffect (() => {
        const url = "https://localhost:5001/games";
        Axios.get(url).then(response => {
            setGames(response.data)
        })
    }, [])

    return (
        <GameContext.Provider value={{Games: [Games, setGames], Game: [Game, setGame]}}>
            {props.children}
        </GameContext.Provider>
    )
}