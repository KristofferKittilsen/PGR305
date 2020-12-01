import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import CharacterItem from "./CharacterItem";
import { Row } from "react-bootstrap";

const CharacterList = () => {

    const {characters} = useContext(CharacterContext);
    const [charactersState, setCharacters] = characters;

    console.log(window.location.href)

    const pageUrl = window.location.href
    const gameId = pageUrl.split("/")
    console.log(gameId[4])

    const generateCharacters = () => {
        return charactersState.map((character, i) => {
            if (character.gameId === gameId[4]) {
                return <CharacterItem key={i} {...character}></CharacterItem>
            }
        })
    }

    return (
        <section>
            <Row className="text-center mt-4 mb-5">
                {generateCharacters()}
            </Row>
        </section>
    )
}

export default CharacterList;