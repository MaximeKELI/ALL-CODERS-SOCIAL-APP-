using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // POST: api/Auth/register
        [HttpPost("register")]
        public IActionResult Register() => Ok("Register endpoint");

        // POST: api/Auth/login
        [HttpPost("login")]
        public IActionResult Login() => Ok("Login endpoint");

        // POST: api/Auth/google
        [HttpPost("google")]
        public IActionResult GoogleLogin() => Ok("Google login endpoint");

        // POST: api/Auth/forgot-password
        [HttpPost("forgot-password")]
        public IActionResult ForgotPassword() => Ok("Forgot password endpoint");

        // POST: api/Auth/verify-email
        [HttpPost("verify-email")]
        public IActionResult VerifyEmail() => Ok("Verify email endpoint");

        // POST: api/Auth/2fa
        [HttpPost("2fa")]
        public IActionResult TwoFA() => Ok("2FA endpoint");

        // PUT: api/Auth/change-password
        [HttpPut("change-password")]
        public IActionResult ChangePassword() => Ok("Change password endpoint");

        // DELETE: api/Auth/delete
        [HttpDelete("delete")]
        public IActionResult DeleteAccount() => Ok("Delete account endpoint");

        // GET: api/Auth/roles
        [HttpGet("roles")]
        public IActionResult GetRoles() => Ok("Get roles endpoint");
    }
} 