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
        <Col lg={4} className="mt-2">
            <CardStyled>
                <Card.Body>
                    <CardTextStyled>{gameId}</CardTextStyled>
                    <CardTextStyled>{name}</CardTextStyled>
                    <CardTextStyled>{info}</CardTextStyled>
                    <ButtonStyled onClick={setSelectedCharacter}>Velg</ButtonStyled>
                </Card.Body>
            </CardStyled>
        </Col>
    )
}

const CardStyled = styled(Card)`
    border: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    min-height: 100%;
`;  

const CardTextStyled = styled(Card.Text)`
    color: black;
    font-size: 0.6rem;
`;

const ButtonStyled = styled(Button)`
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    position: relative;
`;

export default UpdateCharacterItem;
