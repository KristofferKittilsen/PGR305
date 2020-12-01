const { default: CharacterDelete } = require("../components/character/CharacterDelete")
const { default: CharacterList } = require("../components/character/CharacterList")
const { default: CharacterUpdate } = require("../components/character/CharacterUpdate")
const { CharacterProvider } = require("../context/CharacterContext")

const Games = () => {
    return (
        <section>
            <h3>Games</h3>
            <CharacterProvider>
                <CharacterList></CharacterList>
                <CharacterUpdate></CharacterUpdate>
            </CharacterProvider>
        </section>
    )
}

export default Games;