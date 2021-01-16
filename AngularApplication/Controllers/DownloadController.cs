using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
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
        public async Task<IActionResult> Download()
        {
            string filePath = Path.Combine(_env.WebRootPath, "Image\\CV.doc");
            using MemoryStream memorystream = new MemoryStream();
            using (var stream = new FileStream(filePath, FileMode.Open))
            {
                await stream.CopyToAsync(memorystream);
            }
            memorystream.Position = 0;
            return File(memorystream, "application/msword", "CV.doc");
            //try
            //{
            //    var stream = new FileStream(filePath, FileMode.Open);
            //    await stream.CopyToAsync(memoryStream);
            //}
            //finally
            //{
            //    return File(memoryStream, "application/msword", "CV.doc");
            //}
        }
    }
}
