using MongoDB.Driver;
using ConsoleDataApi.Models;
using System.Linq;
using System.Collections.Generic;

namespace ConsoleDataApi.Services {
    public class GamesService {
        private readonly IMongoCollection<Game> _games;

        public GamesService(IGamingConsoleDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _games = database.GetCollection<Game>(settings.GamesCollectionName);
        }

        public List<Game> Get() {
            return _games.Find(game => true).ToList();
        }

        public Game Get(string id) {
            return _games.Find(game => game.Id == id).SingleOrDefault();
        }

        public Game Create(Game game) {
            _games.InsertOne(game);
            return game;
        }

        public void Remove(string id) {
            _games.DeleteOne(game => game.Id == id);
        }

        public void Update(string id, Game gameIn) {
            _games.ReplaceOne(game => game.Id == id, gameIn);
        }
    }
}