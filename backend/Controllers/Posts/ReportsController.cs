using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Posts
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportsController : ControllerBase
    {
        // POST: api/Reports
        [HttpPost]
        public IActionResult ReportPost() => Ok("Report post endpoint");
    }
} 