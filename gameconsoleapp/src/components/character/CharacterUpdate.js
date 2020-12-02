import axios from "axios";
import { useContext } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { CharacterContext } from "../../context/CharacterContext";

const CharacterUpdate = () => {

    const {character, characters} = useContext(CharacterContext);
    const [characterState, setCharacter] = character;
    const [charactersState, setCharacters] = characters;

    const updateCharacter = () => {
        if(characterState.id) {
            const url = "https://localhost:5001/gamecharacters";
            axios.put(`${url}/${characterState.id}`, characterState)
                .then(response => {
                    let indexOfCharacter = charactersState.findIndex(s => s.id = charactersState.id);
                    charactersState[indexOfCharacter] = characterState;
                    setCharacters([...charactersState]);
                })
        }
    }

    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} lg={4}>
                    <Form.Label>GameId</Form.Label>
                    <Form.Control 
                        type = "text"
                        value={characterState.gameId}
                        readOnly
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type = "text"
                        placeholder = "Name"
                        onChange={(e) => setCharacter({...characterState, name: e.target.value})}
                        value={characterState.name}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Info</Form.Label>
                    <Form.Control 
                        as = "textarea"
                        placeholder = "Info"
                        onChange={(e) => setCharacter({...characterState, info: e.target.value})}
                        value={characterState.info}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group>
                    <Button onClick={updateCharacter}>Endre</Button>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default CharacterUpdate;