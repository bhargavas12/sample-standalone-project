namespace UserManagement.Model
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsTrailUser { get; set; }

        public string CustomerType { get; set; }

        public string[] roles { get; set; }
    }
}
