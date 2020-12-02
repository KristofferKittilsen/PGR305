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
            <Row className="mt-2">
                <Col lg={8} className="mt-2 mb-5">
                    <Image src="https://localhost:5001/images/xbox.png" fluid />
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <H4Styled><Image style={{width: "15%"}} src="https://compass-ssl.xbox.com/assets/40/ca/40cab888-b6f8-43b3-9618-8c07f26b8f0b.svg?n=XBX_A-PowerYourDreams_Optimized-Icon-FPO.svg" /> Optimalisert for series X|S</H4Styled>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FontSize>Spill bygget med Xbox Series X | S-utviklingssettet viser frem reduserte belastningstider og imponerende grafikk på opptil 120</FontSize>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <H4Styled><Image style={{width: "15%"}} src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-ray-trace-white-icon-01-en-21aug20?$native--t$" />Ser bedre ut. Spiller bedre</H4Styled>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FontSize>Utstyrt med AMDs Zen 2 og RDNA 2-arkitekturer, leverer DirectX-strålesporing sann belysning, skygger og nøyaktige refleksjoner for å skape dynamiske, levende verdener.</FontSize>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <H4Styled><Image style={{width: "15%"}} src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-120fps-white-icon-01-en-21aug20?$native--t$" />Laget for hastighet</H4Styled>
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
                        <h4 style={{color: "#9bf00b"}} className="text-center">Fantastiske spill</h4>
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
    color: #9bf00b;
    font-size: 1em;
`;

export default XboxPage;