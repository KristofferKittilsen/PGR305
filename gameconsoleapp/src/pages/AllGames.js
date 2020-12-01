import axios from "axios";
import { useEffect, useState } from "react";
import Game from "../components/Game";

const AllGames = () => {
    
    const [games, setGames] = useState(
        [{id: "123", title: "PokemonGO", category: "RPG", price: 299, coverPhoto: "firered.png"}]
    );

    useEffect (() => {
        const url = "https://localhost:5001/Games";
        console.log(url);
        axios.get(url).then(response => {
            setGames(response.data);
        })
    }, [])

    const getGames = () => {
        return games.map((game, i) => {
            return <Game key={i} {...game}></Game>
        });
    }
    
    return (
        <section>
            <h3>All games</h3>
            <p>Amount of games: {games.length}</p>
            {getGames()}
        </section>
    )
}

export default AllGames;