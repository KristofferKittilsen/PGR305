import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
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
        <TrStyled>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header>
                    <Modal.Title>You sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You sure you want to delete this game from database?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShow(false)}>Close</Button>
                    <Button onClick={deleteCharacter}>Yes!</Button>
                </Modal.Footer>
            </Modal>   
            <td>
                {props.gameId}
            </td>
            <td>
                {props.name}
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

export default CharacterDelete;