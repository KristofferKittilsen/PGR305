import styled from 'styled-components'
import { Row, Table } from "react-bootstrap";
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
        <Table striped bordered>
            <thead>
                <TrStyled>
                    <th>GameId</th>
                    <th>Name</th>
                    <th>Info</th>
                    <th>Choose</th>
                </TrStyled> 
            </thead>
            <tbody>
                {generateCharacters()}
            </tbody>
        </Table>
    )
}

const TrStyled = styled.tr`
    color: #ffff;
`;

export default UpdateCharacterList;