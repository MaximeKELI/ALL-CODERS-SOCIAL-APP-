using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Education
{
    [Route("api/[controller]")]
    [ApiController]
    public class EducationController : ControllerBase
    {
        // GET: api/Education/user/5
        [HttpGet("user/{userId}")]
        public IActionResult GetUserEducation(int userId) => Ok($"Get education for user {userId}");

        // POST: api/Education
        [HttpPost]
        public IActionResult AddEducation() => Ok("Add education endpoint");

        // PUT: api/Education/5
        [HttpPut("{id}")]
        public IActionResult EditEducation(int id) => Ok($"Edit education {id}");

        // DELETE: api/Education/5
        [HttpDelete("{id}")]
        public IActionResult DeleteEducation(int id) => Ok($"Delete education {id}");
    }
} 