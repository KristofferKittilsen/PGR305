import GameItem from "./GameItem";
import { useContext } from "react";
import { Row, Container } from "react-bootstrap";
import  { GameContext } from "../../context/GameContext";

const PsGameList = () => {

    const {Games} = useContext(GameContext);
    const [GameState, setGameState] = Games;

    const generatePsGames = () => {
        return GameState.map((Game, i) => {
            if (Game.console === "ps" || Game.console === "ps/xbox") {
                return <GameItem key={`pgi-${i}`} {...Game}></GameItem>
            }
        })
    }

    return (
        <Container>
            <Row>
                {generatePsGames()}
            </Row>
        </Container>
    )
}

export default PsGameList;