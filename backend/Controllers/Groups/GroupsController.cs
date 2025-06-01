using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Groups
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupsController : ControllerBase
    {
        // POST: api/Groups
        [HttpPost]
        public IActionResult CreateGroup() => Ok("Create group endpoint");

        // POST: api/Groups/add-member
        [HttpPost("add-member")]
        public IActionResult AddMember() => Ok("Add member endpoint");

        // DELETE: api/Groups/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteGroup(int id) => Ok($"Delete group {id}");

        // GET: api/Groups/user/5
        [HttpGet("user/{userId}")]
        public IActionResult GetUserGroups(int userId) => Ok($"Get groups for user {userId}");

        // GET: api/Groups/{id}/messages
        [HttpGet("{id}/messages")]
        public IActionResult GetGroupMessages(int id) => Ok($"Get messages for group {id}");
    }
} 