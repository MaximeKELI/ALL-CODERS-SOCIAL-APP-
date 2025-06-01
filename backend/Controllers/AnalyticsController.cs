using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnalyticsController : ControllerBase
    {
        // GET: api/Analytics/profile
        [HttpGet("profile")]
        public IActionResult GetProfileAnalytics() => Ok("Get profile analytics endpoint");
    }
} 