import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { GameContext } from "../../context/GameContext";
import GameItem from "./GameItem";

const XboxGameList = () => {

    const {Games} = useContext(GameContext);
    const [GameState, setGameState] = Games;

    const generateXboxgames = () => {
        return GameState.map((Game, i) => {
            if (Game.console === "xbox" || Game.console === "ps/xbox") {
                return <GameItem key={`xgi-${i}`} {...Game}></GameItem>
            }
        })
    }

    return (
        <Container>
            <Row>
                {generateXboxgames()}
            </Row>
        </Container>   
    )
}

export default XboxGameList;