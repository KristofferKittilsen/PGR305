import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
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
        <TrStyled>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header>
                    <ModalTitle>You sure?</ModalTitle>
                </Modal.Header>
                <Modal.Body>
                    <ModalP>You sure you want to delete this game from database?</ModalP>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShow(false)}>Close</Button>
                    <Button onClick={deleteGame}>Yes!</Button>
                </Modal.Footer>
            </Modal>
            <td>
                {props.id}
            </td>
            <td>
                {props.title}
            </td>
            <td>
                <Button onClick={() => setShow(true)}>Delete</Button>
            </td>
        </TrStyled>
    )
}

const TrStyled = styled.tr`
    color: #ffff;
`;

const ModalTitle = styled(Modal.Title)`
    color: black;
`;

const ModalP = styled.p`
    color: black;
`;

export default GameDelete;


