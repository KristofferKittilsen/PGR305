import { Button, Form, Col, Image } from "react-bootstrap";
const { default: Axios } = require("axios");
const { useContext, useState } = require("react")
const { GameContext } = require("../../context/GameContext")

const GameUpdate = () => {

    const {Game, Games} = useContext(GameContext);
    const [gameState, setGameState] = Game;
    const [gamesState, setGamesState] = Games;

    const links = gameState.links;
    const [linksInput, setLinksInput] = useState("");

    const updateGame = () => {
        if (gameState.id) {
            const url = "https://localhost:5001/games";
            Axios.put(`${url}/${gameState.id}`, gameState)
                .then(response => {
                    let indexOfGame = gamesState.findIndex(s => s.id = gamesState.id);
                    gamesState[indexOfGame] = gameState;
                    setGamesState([...gamesState]);
                })
        }
    }

    const addLinkToArray = () => {
        console.log(links)
        links.push(linksInput)
        alert(`Added ${linksInput}`)
    }

    const deleteLinkFromArray = () => {
        const filteredLinks = links.filter(link => link != linksInput)
        const indexOfLink = filteredLinks.findIndex((e) => e == filteredLinks)
        const splicedLinks = links.splice(indexOfLink, 1)
        
        alert(`Removed ${linksInput}`)
        //No idea what this is, but it suddently worked
    }
    
    return (
        <Form>
            {
                gameState.coverPhoto != undefined &&
                <>
                    <Form.Row>
                        <h4>Bilde visning</h4>  
                    </Form.Row>
                    <Form.Row>

                        <Image style={{height: "15rem", width: "rem", objectFit: "cover"}} src={`https://localhost:5001/images/${gameState.coverPhoto}`} fluid />
                    </Form.Row>
                </>
            }
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Tittel</Form.Label>
                    <Form.Control 
                        type = "text"
                        placeholder = "Tittel"
                        onChange={(e) => setGameState({...gameState, title: e.target.value})}
                        value={gameState.title}
                    />
                    </Form.Group>
                    <Form.Group as={Col} lg={2}>
                        <Form.Label>Pris</Form.Label>
                        <Form.Control 
                            type = "number"
                            placeholder = "Pris"
                            onChange={(e) => setGameState({...gameState, price: parseInt(e.target.value)})}
                            value={gameState.price}
                        />
                </Form.Group>
                <Form.Group as={Col} lg={4}>
                    <Form.Label>Kategory</Form.Label>
                    <Form.Control 
                        type = "text"
                        placeholder = "Kategory"
                        onChange={(e) => setGameState({...gameState, category: e.target.value})}
                        value={gameState.category}
                    />
            </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Forside bilde</Form.Label>
                    <Form.Control 
                        type = "text"
                        placeholder = "Forside bilde"
                        onChange={(e) => setGameState({...gameState, coverPhoto: e.target.value})}
                        value={gameState.coverPhoto}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                <Form.Label>Aldersgrense</Form.Label>
                <Form.Control 
                    type = "text"
                    placeholder = "Aldersgrense"
                    onChange={(e) => setGameState({...gameState, pg: e.target.value})}
                    value={gameState.pg}
                />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Publiserings dato</Form.Label>
                    <Form.Control 
                        type = "text"
                        placeholder = "Publiserings dato"
                        onChange={(e) => setGameState({...gameState, publishDate: e.target.value})}
                        value={gameState.publishDate}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Konsoll</Form.Label>
                    <Form.Control 
                        type = "text"
                        placeholder = "Konsoll"
                        onChange={(e) => setGameState({...gameState, console: e.target.value})}
                        value={gameState.console}
                        readOnly
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Undertittel</Form.Label>
                    <Form.Control 
                        as="textarea"
                        placeholder = "Undertittel"
                        onChange={(e) => setGameState({...gameState, subtitle: e.target.value})}
                        value={gameState.subtitle}
                        rows="3"
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Beskrivelse</Form.Label>
                    <Form.Control 
                        as="textarea"
                        placeholder = "Beskrivelse"
                        onChange={(e) => setGameState({...gameState, description: e.target.value})}
                        value={gameState.description}
                        rows="6"
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                {
                    gameState.links.map((link) => {
                        return <p>{link}</p>
                    })
                }
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Legg til link</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Legg til link"
                        onChange={(e) => setLinksInput(e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} lg={2}>
                    <Button onClick={addLinkToArray}>Legg til link</Button>
                </Form.Group>
                <Form.Group as={Col}>
                    <Button onClick={deleteLinkFromArray}>Slett link</Button>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group>
                    <Button onClick={updateGame}>Endre spill</Button>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default GameUpdate;