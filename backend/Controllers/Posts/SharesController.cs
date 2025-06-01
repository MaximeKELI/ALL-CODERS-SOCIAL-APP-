using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Posts
{
    [Route("api/[controller]")]
    [ApiController]
    public class SharesController : ControllerBase
    {
        // POST: api/Shares
        [HttpPost]
        public IActionResult SharePost() => Ok("Share post endpoint");
    }
} 