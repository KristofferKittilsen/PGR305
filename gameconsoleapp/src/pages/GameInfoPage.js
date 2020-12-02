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
                    <ContainerStyled>
                        <IframeStyled src={link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></IframeStyled>
                    </ContainerStyled>
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
                            <Image style={{width: "8%"}} src={`https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/pegi/${pg}.png`} fluid />
                        </Card.ImgOverlay>
                    </CardStyled>
                </Col>
            </Row>
            {
                links != null &&
                <Row className="justify-content-center"> 
                    <Col lg={8}>
                        <Carousel className="mt-5">
                            {getLinks()}
                        </Carousel>
                    </Col>
                </Row>
            }
            
            <Row className="mt-4 justify-content-center">
                <Col lg={8}>
                    <p>{description}</p>
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

const CardStyled = styled(Card)`
    border: none;
`;  

const ContainerStyled = styled(Container)`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
`;

const IframeStyled = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
`;

export default GameInfoPage;