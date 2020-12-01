import styled from 'styled-components';
const { useContext, useState } = require("react");
const { Col, Card, Button, Modal } = require("react-bootstrap");
const { CharacterContext, CharacterProvider } = require("../../context/CharacterContext")

const UpdateCharacterItem = ({id, name, info, gameId}) => {

    const {character} = useContext(CharacterContext);
    const [characterState, setCharacterState] = character;

    const setSelectedCharacter = () => {
        setCharacterState({id: id, name: name, info: info, gameId: gameId});
    }

    return (
        <TrStyled>
            <td>
                {gameId}
            </td>
            <td>
                {name}
            </td>
            <td>
                {info}
            </td>
            <td>
                <Button onClick={setSelectedCharacter}>Choose</Button>
            </td>
        </TrStyled>
    )
}

const TrStyled = styled.tr`
    color: #ffff;
    font-size: 0.8rem;
`;

export default UpdateCharacterItem;
