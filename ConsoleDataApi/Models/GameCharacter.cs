using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ConsoleDataApi.Models {
    public class GameCharacter {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string Id {get; set;}
        public string Name { get; set; }
        public string Info { get; set; }
        public string GameId { get; set; }
    }
}