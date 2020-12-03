import Axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllGamesList from "../components/game/AllGamesList";
import { GameProvider } from "../context/GameContext";

const AllGames = () => {

    const [games, setGames] = useState([{id: "123", title: "PokemonGO", category: "RPG", price: 299, coverPhoto: "firered.png"}])

    useEffect (() => {
        const url = "https://localhost:5001/games";
        Axios.get(url).then(response => {
            setGames(response.data)
        })
    }, [])

    
    return (
        <Container>
            <Row className="text-center mt-2">
                <Col><h3>Alle spill</h3></Col>
            </Row>
            <Row>
                <Col>
                    <GameProvider>
                        <AllGamesList></AllGamesList>
                    </GameProvider>
                </Col>
            </Row>
        </Container>
    )
}

export default AllGames;