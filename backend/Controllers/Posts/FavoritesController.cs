using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Posts
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        // POST: api/Favorites
        [HttpPost]
        public IActionResult AddFavorite() => Ok("Add favorite endpoint");

        // GET: api/Favorites/user/{userId}
        [HttpGet("user/{userId}")]
        public IActionResult GetUserFavorites(int userId) => Ok($"Get favorites for user {userId}");
    }
} 