import styled from 'styled-components'
import { Col, Container, Row, Image, Carousel, ResponsiveEmbed, Card } from "react-bootstrap";
import CharacterList from "../components/character/CharacterList";
import CustomNavbar from "../components/CustomNavbar";
import { CharacterProvider } from "../context/CharacterContext";
import { useState } from 'react';

const GameInfoPage = (props) => {

    const title = props.location.state.title;
    const coverPhoto = props.location.state.coverPhoto;
    const description = props.location.state.description;
    const price = props.location.state.price;
    const pg = props.location.state.pg;
    const publishDate = props.location.state.publishDate;
    const links = props.location.state.links;

    const getLinks = () => {
        if (links != null) {
        return links.map((link) => {
            console.log(link)
            return (
                <Carousel.Item>
                    <iframe width="720" height="405" src={link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
            )
        })}
    }

    return(
        <Container>
            <Row className="mt-3">
                <Col>
                    <CardStyled>
                        <Card.Img style={{maxWidth: "70rem", maxHeight: "50rem"}} src={`https://localhost:5001/images/${coverPhoto}`}/>
                        <Card.ImgOverlay>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle>kr {price}</Card.Subtitle>
                            <Card.Text className="mt-4">Utgitt {publishDate}</Card.Text>
                            <Image src={`https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/pegi/${pg}.png`} fluid />
                        </Card.ImgOverlay>
                    </CardStyled>
                </Col>
            </Row>
            {
                links != null &&
                <Row className="text-center"> 
                    <Col>
                        <Carousel className="mt-5">
                            {getLinks()}
                        </Carousel>
                    </Col>
                </Row>
            }
            
            <Row className="mt-4">
                <Col>
                    <Pstyled>{description}</Pstyled>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h3 className="text-center">Karakterer du kanskje møter</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CharacterProvider>
                        <CharacterList></CharacterList>
                    </CharacterProvider>
                </Col>
            </Row>
        </Container>
    )
}

const Pstyled = styled.p`
    width: 70%;
    margin-left: 15%;
`;

const CardStyled = styled(Card)`
    border: none;
`;  

export default GameInfoPage;