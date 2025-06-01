using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Posts
{
    [Route("api/[controller]")]
    [ApiController]
    public class LikesController : ControllerBase
    {
        // POST: api/Likes
        [HttpPost]
        public IActionResult AddLike() => Ok("Add like endpoint");

        // GET: api/Likes/post/{postId}
        [HttpGet("post/{postId}")]
        public IActionResult GetLikesForPost(int postId) => Ok($"Get likes for post {postId}");
    }
} 