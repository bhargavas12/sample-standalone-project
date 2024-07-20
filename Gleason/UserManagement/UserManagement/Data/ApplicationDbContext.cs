using Microsoft.EntityFrameworkCore;
using UserManagement.Model;

namespace UserManagement.Data
{
    public class ApplicationDbContext : DbContext
    {
        private readonly DbContextOptions options;

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
            this.options = options;
        }

        public DbSet<User> Users { get; set; }
    }
}
