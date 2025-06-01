using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Settings
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingsController : ControllerBase
    {
        // GET: api/Settings/privacy
        [HttpGet("privacy")]
        public IActionResult GetPrivacySettings() => Ok("Get privacy settings endpoint");

        // PUT: api/Settings/privacy
        [HttpPut("privacy")]
        public IActionResult UpdatePrivacySettings() => Ok("Update privacy settings endpoint");

        // GET: api/Settings/theme
        [HttpGet("theme")]
        public IActionResult GetTheme() => Ok("Get theme endpoint");

        // PUT: api/Settings/theme
        [HttpPut("theme")]
        public IActionResult UpdateTheme() => Ok("Update theme endpoint");
    }
} 