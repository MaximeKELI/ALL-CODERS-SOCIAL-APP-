using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Notifications
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        // GET: api/Notifications
        [HttpGet]
        public IActionResult GetNotifications() => Ok("Get notifications endpoint");

        // POST: api/Notifications/read
        [HttpPost("read")]
        public IActionResult MarkAsRead() => Ok("Mark as read endpoint");

        // POST: api/Notifications
        [HttpPost]
        public IActionResult CreateNotification() => Ok("Create notification endpoint");
    }
} 