import axios from "axios";
import {useState, createContext, useEffect} from "react";

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
    const [characters, setCharacters] = useState([
        {
            id: "",
            name: "",
            gameId: ""
        },
        {
            id: "",
            name: "",
            gameId: ""
        }
    ]);

    const [character, setCharacter] = useState({id: "id", name: "name", gameId: "gameId"});

    useEffect (() => {
        const url = "https://localhost:5001/gamecharacters";
        axios.get(url)
            .then(response => {
                setCharacters(response.data)
            })
    }, [])

    return (
        <CharacterContext.Provider value={{characters: [characters, setCharacters], character: [character, setCharacter]}}>
            {props.children}
        </CharacterContext.Provider>
    )
}