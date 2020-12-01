import { Button, Image } from 'react-bootstrap';
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
        <>
        <TrStyled>
            <td>
                {title}
            </td>
            <td>
                {price}
            </td>
            <td>
                {category}
            </td>
            <td>
                {coverPhoto}
            </td>
            <td>
                {description}
            </td>
            <td>
                {subtitle}
            </td>
            <td>
                {pg}
            </td>
            <td>
                {publishDate}
            </td>
            <td>
                {console}
            </td>
            <td>
                {
                    links != null &&
                        links.map((link) => {
                            return <p>{link}</p>
                        })
                }
            </td>
            <td>
                <Button onClick={setSelectedGame}>Velg</Button>
            </td>
        </TrStyled>
        </>
    )
}

const TrStyled = styled.tr`
    color: #ffff;
    font-size: 0.8rem;
`;

export default UpdateGameItem;