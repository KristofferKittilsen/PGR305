import styled from 'styled-components'
import { Container, Row, Table } from "react-bootstrap";
import UpdateCharacterItem from "./UpdateCharacterItem";
const { useContext, useState } = require("react")
const { CharacterContext } = require("../../context/CharacterContext")

const UpdateCharacterList = () => {

    const {characters} = useContext(CharacterContext);
    const [charactersState, setCharactersState] = characters;

    const [searchInput, setSearchInput] = useState("");
    const [filteredState, setFilteredState] = characters;

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