import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { GameContext } from "../../context/GameContext";
import UpdateGameItem from "./UpdateGameItem";

const UpdateGameList = () => {

    const {Games} = useContext(GameContext);
    const [gamesState, setGamesState] = Games;

    const generateGames = () => {
        return gamesState.map((game, i) => {
            return <UpdateGameItem key={`upgi-${i}`} {...game}></UpdateGameItem>
        })
    }

    return (
        <Container>
            <Row>
                {generateGames()}
            </Row>
        </Container>
    )
}

export default UpdateGameList;