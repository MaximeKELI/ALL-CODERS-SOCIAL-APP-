using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Posts
{
    [Route("api/[controller]")]
    [ApiController]
    public class HashtagsController : ControllerBase
    {
        // GET: api/Hashtags/{tag}
        [HttpGet("{tag}")]
        public IActionResult GetPostsByHashtag(string tag) => Ok($"Get posts for hashtag {tag}");
    }
} 