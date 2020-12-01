import { GameContext } from "../../context/GameContext";
import GameItem from "./GameItem";
const { useContext } = require("react");
const { Row, Col, Container } = require("react-bootstrap");

const XboxGameList = () => {

    const {Games} = useContext(GameContext);
    const [GameState, setGameState] = Games;

    const generateXboxgames = () => {
        return GameState.map((Game, i) => {
            if (Game.console === "xbox") {
                return <GameItem key={`xgi-${i}`} {...Game}></GameItem>
            }
        })
    }

    return (
        <Container>
            <Row className="mt-4">
                {generateXboxgames()}
            </Row>
        </Container>   
    )
}

export default XboxGameList;