using MongoDB.Driver;
using ConsoleDataApi.Models;
using System.Linq;
using System.Collections.Generic;

namespace ConsoleDataApi.Services {
    public class CharactersService {
        private readonly IMongoCollection<GameCharacter> _characters;

        public CharactersService(IGamingConsoleDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _characters = database.GetCollection<GameCharacter>(settings.CharacterCollectionName);
        }

        public List<GameCharacter> Get() {
            return _characters.Find(character => true).ToList();
        }

        public GameCharacter Get(string id) {
            return _characters.Find(character => character.Id == id).SingleOrDefault();
        }

        public void Update(string id, GameCharacter gameCharacterIn) {
            _characters.ReplaceOne(gameCharacter => gameCharacter.Id == id, gameCharacterIn);
        }

        public void Remove(string id) {
            _characters.DeleteOne(character => character.Id == id);
        }

        public GameCharacter Create(GameCharacter gameCharacter) {
            _characters.InsertOne(gameCharacter);
            return gameCharacter;
        }
    }
}