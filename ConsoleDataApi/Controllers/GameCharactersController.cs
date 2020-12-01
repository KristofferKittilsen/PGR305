using ConsoleDataApi.Models;
using ConsoleDataApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ConsoleDataApi.Controllers {
    [ApiController]
    [Route("[controller]")]

    public class GameCharactersController: ControllerBase {
        private readonly CharactersService _charactersService;

        public GameCharactersController(CharactersService charactersService) {
            _charactersService = charactersService;
        }

        [HttpGet]
        public ActionResult<List<GameCharacter>> Get() {
            return _charactersService.Get();
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, GameCharacter gameCharacterIn) {
            var selectedCharacter = _charactersService.Get(id);

            if (selectedCharacter == null) {
                return NotFound();
            }

            _charactersService.Update(id, gameCharacterIn);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id) {
            var character = _charactersService.Get(id);

            if (character == null) {
                return NotFound();
            }

            _charactersService.Remove(character.Id);
            return NoContent();
        }

        [HttpPost]
        public ActionResult<GameCharacter> Post(GameCharacter gameCharacter) {
            _charactersService.Create(gameCharacter);
            return gameCharacter;
        }
    }
}