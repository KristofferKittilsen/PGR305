import { useContext, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { CharacterContext } from "../../context/CharacterContext";
import UpdateCharacterItem from "./UpdateCharacterItem";


const UpdateCharacterList = () => {

    const {characters} = useContext(CharacterContext);
    const [charactersState, setCharactersState] = characters;

    const generateCharacters = () => {
        return charactersState.map((character, i) => {
            return <UpdateCharacterItem key={`uci-${i}`} {...character}></UpdateCharacterItem>
        })
    }

    return (
        <Container>
            <Row>
                {generateCharacters()}
            </Row>
        </Container>
    )
}

export default UpdateCharacterList;