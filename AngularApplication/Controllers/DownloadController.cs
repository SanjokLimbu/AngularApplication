using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Net;
using System.Net.Http;

namespace AngularApplication.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class DownloadController : Controller
    {
        private readonly IWebHostEnvironment _env;
        private HttpResponseMessage response;

        public DownloadController(IWebHostEnvironment env)
        {
            _env = env;
        }
        [HttpGet]
        public HttpResponseMessage GetDownloadFile()
        {
            string filePath = Path.Combine(_env.WebRootPath, "Image\\CV.doc");
            var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
            response = new HttpResponseMessage
            {
                StatusCode = HttpStatusCode.OK,
                Content = new StreamContent(fileStream)
            };
            return response;
        }
    }
}
