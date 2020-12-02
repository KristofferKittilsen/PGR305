import { Link } from "react-router-dom";
import styled from 'styled-components'
const { useContext } = require("react");
const { Col, Card, Button, Image, Row } = require("react-bootstrap");
const { GameContext } = require("../../context/GameContext")

const GameItem = ({id, title, price, category, coverPhoto, console, description, subtitle, pg, publishDate, links}) => {

    const {Games} = useContext(GameContext);
    const [GameState, setGameState] = Games;

    return (
        <Row className="mt-2 mb-4">
            <Col lg={6}>
                <Image style={{height: "15rem", width: "100rem", objectFit: "cover"}} src={`https://localhost:5001/images/${coverPhoto}`} fluid />              
            </Col>
            <Col>
                <Pstyled>{title}</Pstyled>
                <Pstyled>{subtitle}</Pstyled>
                <Link to={{
                    pathname: `/gameInfo/${id}`,
                    state: {
                        id,
                        title,
                        price,
                        category,
                        coverPhoto,
                        description,
                        pg,
                        publishDate,
                        console,
                        links
                    }
                    }}>
                    <MoreBtn>Finn ut mer</MoreBtn>
                </Link>
            </Col>
        </Row>
    )
}

const MoreBtn = styled(Button)`
    padding: 0.7rem;
    border-radius: 0;
`;

const Pstyled = styled.p`
    color: #ffff;
`;

export default GameItem;