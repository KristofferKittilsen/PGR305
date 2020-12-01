namespace ConsoleDataApi.Models {
    public interface IGamingConsoleDatabaseSettings {
        string GamesCollectionName {get; set;}
        string CharacterCollectionName {get; set;}
        string ConnectionString {get; set;}
        string DatabaseName {get; set;}
    }

    public class GamingConsoleDatabaseSettings: IGamingConsoleDatabaseSettings {
        public string GamesCollectionName { get; set; }
        public string CharacterCollectionName {get; set;}
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
