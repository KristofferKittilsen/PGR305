import GameItem from "./GameItem";
const { useContext } = require("react");
const { Row, Container } = require("react-bootstrap");
const { GameContext } = require("../../context/GameContext");

const PsGameList = () => {

    const {Games} = useContext(GameContext);
    const [GameState, setGameState] = Games;

    const generatePsGames = () => {
        return GameState.map((Game, i) => {
            if (Game.console === "ps") {
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