import styled from 'styled-components'
import { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button, Accordion, ButtonGroup } from "react-bootstrap";
import { GameContext } from "../../context/GameContext";
import GameItem from "./GameItem"

const AllGamesList = () => {

    const {Games} = useContext(GameContext);
    const [gameState, setGameState] = Games;

    const [filteredGames, setFilteredGames] = useState([]);
    const [category, setCategory] = useState("all");
    const [gameConsole, setGameConsole] = useState("both");

   useEffect (() => {
       if (category != "all") {
            setFilteredGames (gameState.filter((game) => game.category === category));
            setGameConsole("both")
       } else {
            setFilteredGames(gameState)
       }

   }, [category, gameState]);

    useEffect (() => {
        if (gameConsole != "both") {
             setFilteredGames (gameState.filter((game) => game.console === gameConsole));
             setCategory("all")
        } else {
             setFilteredGames(gameState);
        }

    }, [gameConsole, gameState]);

    return (
        <Container>
            <Row className="mb-2">
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Button} eventKey="1"> 
                            Filtrer på konsoll eller kategori
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Container>
                                <Row className="mt-2">
                                    <Col lg={3} className="mt-2 mb-2">
                                        <ButtonStyled style={{backgroundColor: gameConsole == "both" ? "green" : "#007bff"}} onClick={() => setGameConsole("both")}>Xbox/Ps</ButtonStyled>
                                        <ButtonStyled style={{backgroundColor: gameConsole == "xbox" ? "green" : "#007bff"}} onClick={() => setGameConsole("xbox")}>Xbox</ButtonStyled>
                                        <ButtonStyled style={{backgroundColor: gameConsole == "ps" ? "green" : "#007bff"}} onClick={() => setGameConsole("ps")}>Ps</ButtonStyled>
                                    </Col>
                                    <Col lg={4} className="mt-2 mb-2">
                                        <ButtonStyled style={{backgroundColor: category == "all" ? "green" : "#007bff"}} onClick={() => setCategory("all")}>All</ButtonStyled>
                                        <ButtonStyled style={{backgroundColor: category == "Action" ? "green" : "#007bff"}} onClick={() => setCategory("Action")}>Action</ButtonStyled>
                                        <ButtonStyled style={{backgroundColor: category == "Action-adventure" ? "green" : "#007bff"}} onClick={() => setCategory("Action-adventure")}>Action-adventure</ButtonStyled>
                                        <ButtonStyled style={{backgroundColor: category == "Adventure" ? "green" : "#007bff"}} onClick={() => setCategory("Adventure")}>Adventure</ButtonStyled>
                                    </Col>
                                    <Col lg={5} className="mt-2 mb-2">
                                        <ButtonStyled style={{backgroundColor: category == "Role-playing" ? "green" : "#007bff"}} onClick={() => setCategory("Role-playing")}>Role-playing</ButtonStyled>
                                        <ButtonStyled style={{backgroundColor: category == "Simulation" ? "green" : "#007bff"}} onClick={() => setCategory("Simulation")}>Simulation</ButtonStyled>
                                        <ButtonStyled style={{backgroundColor: category == "Strategy" ? "green" : "#007bff"}} onClick={() => setCategory("Strategy")}>Strategy</ButtonStyled>
                                        <ButtonStyled style={{backgroundColor: category == "Sports" ? "green" : "#007bff"}} onClick={() => setCategory("Sports")}>Sports</ButtonStyled>
                                        <ButtonStyled style={{backgroundColor: category == "MMO" ? "green" : "#007bff"}} onClick={() => setCategory("MMO")}>MMO</ButtonStyled>
                                    </Col>
                                </Row>
                            </Container>
                        </Accordion.Collapse>
                    </Accordion>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    {
                        filteredGames.map((game, i) => {
                            return <GameItem key={`gag-${i}`} {...game}></GameItem>
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

const ButtonStyled = styled(Button)`
    border-radius: 0;
    font-size: 0.8rem;
`; 

export default AllGamesList;