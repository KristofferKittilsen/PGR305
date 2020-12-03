import axios from "axios";
import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import styled from 'styled-components';

const GameDelete = (props) => {

    const [show, setShow] = useState(false)

    const deleteGame = () => {
        const url = "https://localhost:5001/Games";

        console.log(props.id)
        console.log(props.title)
        axios.delete(`${url}/${props.id}`)
        setShow(false);
    }

    return (
        <CardStyled className="mt-4 mb-2">
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header>
                    <ModalTitle>You sure?</ModalTitle>
                </Modal.Header>
                <Modal.Body>
                    <ModalP>You sure you want to delete this game from database?</ModalP>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger"  onClick={() => setShow(false)}>Close</Button>
                    <Button variant="success" onClick={deleteGame}>Yes!</Button>
                </Modal.Footer>
            </Modal>
            <Card.Img src={`https://localhost:5001/images/${props.coverPhoto}`} />
            <Card.ImgOverlay>
                <Card.Title>GameId: {props.id}</Card.Title>
                <Card.Title>{props.title}</Card.Title>
            </Card.ImgOverlay>
            <ButtonStyled onClick={() => setShow(true)}>Slett</ButtonStyled>
        </CardStyled>
    )
}

const ButtonStyled = styled(Button)`
    width: 100%;
    position: relative;
`;

const ModalP = styled.p`
    color: black;
`;

const ModalTitle = styled(Modal.Title)`
    color: black;
`;

const CardStyled = styled(Card)`
    color: #ffff;
    font-size: 0.8rem;
    border: none;
`;

export default GameDelete;


