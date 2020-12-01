import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios';
import Game from '../components/Game';
import { GameProvider } from '../context/GameContext';
import XboxGameList from '../components/game/XboxGameList';
import CustomNavbar from '../components/CustomNavbar';
const { Container, Row, Col, Image } = require("react-bootstrap")

const XboxPage = () => {

    const [games, setGames] = useState(
        [{id: "123", title: "pokemon", category: "RPG", price: 299, coverPhoto: "firered.png", console: "ps"}]
    )

    useEffect (() => {
        const url = "https://localhost:5001/Games";
        Axios.get(url).then(response => {
            setGames(response.data);
        })
    }, [])

    return (
        <Container>
            <Row className="mt-4">
                <Col>
                    <Image src="https://localhost:5001/images/xbox.png" fluid />
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <H4Styled>12 Tflops med kraft</H4Styled>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FontSize>De 12 teraflopene med prosessorkraft som er plassert i systemet på en chip (SOC), jobber med AMDs Zen 2 og RDNA 2-arkitekturer for å resultere i verdener som krever nærmere titt.</FontSize>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <H4Styled>Ser bedre ut. Spiller bedre</H4Styled>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FontSize>Utstyrt med AMDs Zen 2 og RDNA 2-arkitekturer, leverer DirectX-strålesporing sann belysning, skygger og nøyaktige refleksjoner for å skape dynamiske, levende verdener.</FontSize>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <H4Styled>Laget for hastighet</H4Styled>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FontSize>Sammen setter det nye systemet på en brikke (SOC) og Xbox Velocity Architecture hastighet for fingertuppene, og den 1TB tilpassede SSD & CPU satte hjulet i hendene dine, slik at du kan gå fra 0-60 i opptil 120FPS.</FontSize>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <H4Styled className="text-center">Fantastiske spill</H4Styled>
                    </Col>
                </Row>                
                <Row>
                    <Col>
                        <GameProvider>
                            <XboxGameList></XboxGameList>
                        </GameProvider>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

const FontSize = styled.p`
    font-size: 0.8em;
    color: #ffff;
`;

const H4Styled = styled.h4`
    color: #ffff;
`;

export default XboxPage;