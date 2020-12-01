import styled from 'styled-components'
const { useContext } = require("react");
const { Table } = require("react-bootstrap");
const { GameContext } = require("../../context/GameContext");
const { default: UpdateGameItem } = require("./UpdateGameItem");

const UpdateGameList = () => {

    const {Games} = useContext(GameContext);
    const [gamesState, setGamesState] = Games;

    const generateGames = () => {
        return gamesState.map((game, i) => {
            return <UpdateGameItem key={`upgi-${i}`} {...game}></UpdateGameItem>
        })
    }

    return (
        <Table striped bordered>
            <thead>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Cover photo</th>
                <th>Description</th>
                <th>Subtitle</th>
                <th>Pg</th>
                <th>Publiserings Dato</th>
                <th>Console</th>
                <th>Youtube linker</th>
                <th>Velg</th>
            </thead>
            <tbody>
                {generateGames()}
            </tbody>
        </Table>
    )
}

const TrStyled = styled.tr`
    color: #ffff;
`;

export default UpdateGameList;