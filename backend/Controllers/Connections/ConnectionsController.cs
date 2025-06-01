using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Connections
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConnectionsController : ControllerBase
    {
        // POST: api/Connections/request
        [HttpPost("request")]
        public IActionResult RequestConnection() => Ok("Request connection endpoint");

        // POST: api/Connections/accept
        [HttpPost("accept")]
        public IActionResult AcceptConnection() => Ok("Accept connection endpoint");

        // POST: api/Connections/refuse
        [HttpPost("refuse")]
        public IActionResult RefuseConnection() => Ok("Refuse connection endpoint");

        // GET: api/Connections
        [HttpGet]
        public IActionResult GetConnections() => Ok("Get connections endpoint");

        // POST: api/Connections/block
        [HttpPost("block")]
        public IActionResult BlockUser() => Ok("Block user endpoint");

        // POST: api/Connections/report
        [HttpPost("report")]
        public IActionResult ReportUser() => Ok("Report user endpoint");

        // GET: api/Connections/suggestions
        [HttpGet("suggestions")]
        public IActionResult GetSuggestions() => Ok("Get suggestions endpoint");
    }
} 