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
                    <ModalTitle>You sure?</ModalTitle>
                </Modal.Header>
                <Modal.Body>
                    <ModalP>You sure you want to delete this game from database?</ModalP>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShow(false)}>Close</Button>
                    <Button variant="success" onClick={deleteCharacter}>Yes!</Button>
                </Modal.Footer>
            </Modal>   
            <Card.Title>GameId: {props.gameId}</Card.Title>
            <Card.Title>{props.name}</Card.Title>
            <Button onClick={() => setShow(true)}>Slett</Button>
        </CardStyled>
    )
}

const CardStyled = styled(Card)`
    color: black;
    font-size: 0.8rem;
    border: none;
`;

const ModalTitle = styled(Modal.Title)`
    color: black;
`;

const ModalP = styled.p`
    color: black;
`;

export default CharacterDelete;