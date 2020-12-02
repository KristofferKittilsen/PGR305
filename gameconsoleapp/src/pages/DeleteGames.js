import styled from 'styled-components'
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import CharacterDelete from "../components/character/CharacterDelete";
import GameDelete from "../components/GameDelete";

const DeleteGames = () => {
    const [games, setGames] = useState(
        [{id: "123", title: "PokemonGO", category: "RPG", price: 299, coverPhoto: "firered.png"}]
    );

    const [characters, setCharacters] = useState(
        [{id: "123", name: "name", info: "info", gameId: "gameId"}]
    )

    useEffect (() => {
        const url = "https://localhost:5001/Games";
        const characterUrl = "https://localhost:5001/gamecharacters";
        console.log(url);
        axios.get(url).then(response => {
            setGames(response.data);
        })
        axios.get(characterUrl).then(response => {
            setCharacters(response.data);
        })
    }, [])

    const deleteGames = () => {
        return games.map((game, i) => {
            return <GameDelete key={i} id={game.id} title={game.title} coverPhoto={game.coverPhoto}></GameDelete>
        });
    }

    const deleteCharacters = () => {
        return characters.map((character, i) => {
            return <CharacterDelete key={`cd-${i}`} id={character.id} name={character.name} gameId={character.gameId}></CharacterDelete>
        })
    }
    
    return (
        <Container>
            <Row>
                <Col lg={6}>
                <h3 className="text-center">Games</h3>
                    {deleteGames()}
                </Col>
                <Col lg={6}>
                    <h3 className="text-center">Characters</h3>
                    {deleteCharacters()}
                </Col>
            </Row>
        </Container>
    )
}

export default DeleteGames;

                        
                        