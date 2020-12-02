import { Accordion, Button, Card, Col, Image } from 'react-bootstrap';
import styled from 'styled-components'
const { useContext } = require("react");
const { GameContext } = require("../../context/GameContext");

const UpdateGameItem = ({id, title, price, category, coverPhoto, description, subtitle, pg, publishDate, console, links}) => {

    const {Game} = useContext(GameContext);
    const [gameState, setGameState] = Game;

    const setSelectedGame = () => {
        setGameState({id: id, title: title, price: price, category: category, coverPhoto: coverPhoto, description: description, subtitle: subtitle, pg: pg, publishDate: publishDate, console: console, links: links});
    }

    return (
        <Col lg={4} className="mt-2">
            <CardStyled>
                <CardImgStyled src={`https://localhost:5001/images/${coverPhoto}`} />
                <Card.ImgOverlay>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>kr {price}</Card.Subtitle>
                    <Card.Text>Utgitt {publishDate}</Card.Text>
                    <Image style={{width: "8%"}} src={`https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/pegi/${pg}.png`} fluid />
                </Card.ImgOverlay>
                <Accordion defaultActiveKey="0">
                    <Accordion.Toggle eventKey="1" as={MoreButton}>Se mer</Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <CardTextStyled>{subtitle}</CardTextStyled>
                            <CardTextStyled>{description}</CardTextStyled>
                            <CardTextStyled>Kategory: {category}</CardTextStyled>
                            <CardTextStyled>Konsoll: {console}</CardTextStyled>
                            <CardTextStyled>Linker:
                                {
                                    links != null &&
                                    links.map((link) => {
                                        return <p>{link}</p>
                                    })
                                }
                            </CardTextStyled>
                            <ButtonStyled onClick={setSelectedGame}>Velg</ButtonStyled>
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </CardStyled>
        </Col>
    )
}

const CardStyled = styled(Card)`
    border: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
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

const MoreButton = styled(Button)`
    position: relative;
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const CardImgStyled = styled(Card.Img)`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`;

export default UpdateGameItem;