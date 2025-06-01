using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Posts
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        // POST: api/Comments
        [HttpPost]
        public IActionResult AddComment() => Ok("Add comment endpoint");

        // GET: api/Comments/post/{postId}
        [HttpGet("post/{postId}")]
        public IActionResult GetCommentsForPost(int postId) => Ok($"Get comments for post {postId}");
    }
} 