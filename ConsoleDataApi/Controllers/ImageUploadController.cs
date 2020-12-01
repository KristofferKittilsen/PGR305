using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ConsoleDataApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ImageUploadController : ControllerBase {
        private readonly IWebHostEnvironment _hosting;
        public ImageUploadController(IWebHostEnvironment hosting){
            _hosting = hosting;
        }
        [HttpGet]
        public string Get(){
            return "This is from upload Api";
        }

        [HttpPost]
        [Route("[action]")]
        public void UploadImage( IFormFile file ){
            string wwwrootPath = _hosting.WebRootPath;
            string absolutePath = Path.Combine( $"{wwwrootPath}/images/{file.FileName}" );
            using(var fileStream = new FileStream(absolutePath, FileMode.Create)){
                file.CopyTo( fileStream );
            }
        }
    }
}