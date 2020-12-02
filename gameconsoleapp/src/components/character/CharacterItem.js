import styled from 'styled-components'
import { Card, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";

const CharacterItem = ({id, name, info}) => {

    return (
        <Col lg={6}>
            <h4>{name}</h4>   
            <Underline /> 
            <p>{info}</p>        
        </Col>
    )
}

const Underline = styled.div`
    border-bottom: 1px solid #ff4d40;
    width: 50%;
    margin-left: 25%;
`;

export default CharacterItem;