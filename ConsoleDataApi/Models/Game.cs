using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ConsoleDataApi.Models {
    public class Game {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
        public string Category { get; set; }
        public string CoverPhoto { get; set; }
        public string Console { get; set; }
        public string Description { get; set; }
        public string Subtitle { get; set; }
        public string Pg { get; set; }
        public string PublishDate { get; set; }
        public string[] links { get; set; }
    }
}