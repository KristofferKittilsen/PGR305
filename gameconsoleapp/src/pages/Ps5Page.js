import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Axios from 'axios';
import Game from '../components/Game';
import { GameProvider } from '../context/GameContext';
import PsGameList from "../components/game/PsGameList";
import CustomNavbar from '../components/CustomNavbar';
const { Container, Row, Col, Image } = require("react-bootstrap")

const Ps5Page = () => {

    const [games, setGames] = useState(
        [{id: "123", title: "pokemon", category: "RPG", price: 299, coverPhoto: "firered.png", console: "ps"}]
    );

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
                    <Image src="https://localhost:5001/images/ps5.png" fluid />
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <H4Styled>Strålesporing</H4Styled>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FontSize>Fordyp deg i verdener med et nytt nivå av realisme når lysstråler simuleres individuelt, noe som skaper livaktige skygger og refleksjoner i støttede PS5-spill.</FontSize>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <H4Styled>4K-TV-spilling</H4Styled>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FontSize>Spill PS5-favorittspillene dine på den flotte 4K TV-en.</FontSize>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <H4Styled>Opptil 120 bilder i sekunder med en utgangseffekt på 120 Hz</H4Styled>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FontSize>Gled deg over jevne og sammenhengende bilder med opptil 120 bilder i sekundet for kompatible  spill med støtte for en utgangseffekt på 120 Hz på 4K-skjermer.</FontSize>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <H4Styled>HDR-teknologi</H4Styled>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FontSize>Med en HDR-TV kan støttede PS5-spill vise et utrolig levende og livaktig utvalg av farger</FontSize>
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
                            <PsGameList></PsGameList>
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

export default Ps5Page;