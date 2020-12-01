import { Button, Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Game = ({id, title, price, category, coverPhoto, console}) => {

    return (
        <Container>
            <Image style={{height: "15rem", width: "30rem", objectFit: "cover"}} src={`https://localhost:5001/images/${coverPhoto}`} fluid />   
            <p>{title}</p> 
            <Button>Finn ut mer</Button>
        </Container>
            
    )
}

export default Game;


