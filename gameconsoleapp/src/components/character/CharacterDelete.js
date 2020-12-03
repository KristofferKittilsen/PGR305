import axios from "axios";
import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import styled from 'styled-components';

const CharacterDelete = (props) => {

    const [show, setShow] = useState(false);

    const deleteCharacter = () => {
        const url = "https://localhost:5001/gamecharacters";

        console.log(props.id)
        console.log(props.name)
        axios.delete(`${url}/${props.id}`)
        setShow(false);
    }

    return (
        <CardStyled className="mt-4">
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header>
                    <ModalTitle>Er du sikker?</ModalTitle>
                </Modal.Header>
                <Modal.Body>
                    <ModalP>Sikker på at du vil slette dette fra databasen?</ModalP>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShow(false)}>Lukk</Button>
                    <Button variant="success" onClick={deleteCharacter}>Ja</Button>
                </Modal.Footer>
            </Modal>   
            <Card.Title>SpillId: {props.gameId}</Card.Title>
            <Card.Title>{props.name}</Card.Title>
            <Button onClick={() => setShow(true)}>Slett</Button>
        </CardStyled>
    )
}

const CardStyled = styled(Card)`
    color: black;
    font-size: 0.8rem;
    border: none;
    background-color: lightgray;
`;

const ModalTitle = styled(Modal.Title)`
    color: black;
`;

const ModalP = styled.p`
    color: black;
`;

export default CharacterDelete;