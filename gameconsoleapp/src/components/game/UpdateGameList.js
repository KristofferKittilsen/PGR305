import styled from 'styled-components'
const { useContext } = require("react");
const { Table, Container, Row, Col } = require("react-bootstrap");
const { GameContext } = require("../../context/GameContext");
const { default: UpdateGameItem } = require("./UpdateGameItem");

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