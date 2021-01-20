using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;

namespace AngularApplication.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class DownloadController : Controller
    {
        private readonly IWebHostEnvironment _env;

        public DownloadController(IWebHostEnvironment env)
        {
            _env = env;
        }
        [HttpGet]
        public async Task<IActionResult> GetDownloadFile()
        {
            string filePath = Path.Combine(_env.WebRootPath, "Image\\CV.doc");
            FileStream stream = null;
            try
            {
                MemoryStream memoryStream = new MemoryStream();
                stream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
                await stream.CopyToAsync(memoryStream);
                memoryStream.Position = 0;
                return File(memoryStream, "text/plain");
            }
            finally
            {
                if (stream != null) stream.Dispose();
            }
        }
    }
}
