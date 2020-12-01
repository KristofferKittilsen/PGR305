import { Col, Container, Row } from "react-bootstrap";
import CharacterUpdate from "../components/character/CharacterUpdate";
import GameUpdate from "../components/game/GameUpdate";
import UpdateGameList from "../components/game/UpdateGameList";
import { GameProvider } from "../context/GameContext";

const { default: UpdateCharacterList } = require("../components/character/UpdateCharacterList")
const { CharacterProvider } = require("../context/CharacterContext")

const EditPage = () => {
    return (
        <Container>
            <Row className="text-center">
                <Col>
                    <h3>Endre</h3>
                </Col>
            </Row>
            <Row className="mt-3 mb-3">
                <Col>
                    <h3>Spill</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GameProvider>
                        <GameUpdate></GameUpdate>
                        <UpdateGameList></UpdateGameList>
                    </GameProvider>
                </Col>
            </Row>
            <Row className="mt-5 mb-3">
                <Col>
                    <h3>Karakterer</h3>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col>
                    <CharacterProvider>
                        <CharacterUpdate></CharacterUpdate>
                        <UpdateCharacterList></UpdateCharacterList>
                    </CharacterProvider>
                </Col>
            </Row>
        </Container>
    )
}

export default EditPage;