using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UserManagement.Data;
using UserManagement.Model;

namespace UserManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;
        public UserController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<User>> GetUsers()
        {
            var result = this.dbContext.Users.ToList();
            return Ok(result);
        }

        [HttpPost]
        [Authorize]

        public async Task<ActionResult> CreateUser(User user)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            await this.dbContext.AddAsync(user);
            await this.dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
