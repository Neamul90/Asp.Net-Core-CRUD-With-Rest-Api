using Asp.NetCoreCRUD.Context;
using Asp.NetCoreCRUD.Helpers;
using Asp.NetCoreCRUD.Models;
using Asp.NetCoreCRUD.Models.UserRequest;
using AutoMapper;
using WebApi.Helpers;

namespace Asp.NetCoreCRUD.Service
{
    public class UserService : IUserService
    {
        private ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public UserService(
            ApplicationDbContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }

        public User GetById(int id)
        {
            return getUser(id);
        }

        public void Create(CreateRequest model)
        {
            // validate
            if (_context.Users.Any(x => x.Email == model.Email))
                throw new AppException("User with the email '" + model.Email + "' already exists");

            // map model to new user object
            var user = _mapper.Map<User>(model);

            // hash password
            user.PasswordHash = HashConfig.EncodePasswordToBase64(model.Password);

            // save user
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public void Update(int id, UpdateRequest model)
        {
            var user = getUser(id);

            // validate
            if (model.Email != user.Email && _context.Users.Any(x => x.Email == model.Email))
                throw new AppException("User with the email '" + model.Email + "' already exists");

            // hash password if it was entered
            if (!string.IsNullOrEmpty(model.Password))
                user.PasswordHash = HashConfig.EncodePasswordToBase64(model.Password);

            // copy model to user and save
            _mapper.Map(model, user);
            _context.Users.Update(user);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var user = getUser(id);
            _context.Users.Remove(user);
            _context.SaveChanges();
        }

        // helper methods

        private User getUser(int id)
        {
            var user = _context.Users.Find(id);
            user.PasswordHash = HashConfig.DecodeFrom64(user.PasswordHash);
            if (user == null) throw new KeyNotFoundException("User not found");
            return user;
        }

        public User Login(string username, string password)
        {
            string encript_password = HashConfig.EncodePasswordToBase64(password);
            var user = _context.Users.FirstOrDefault(a => a.Email == username && a.PasswordHash==encript_password);
            if (user == null) return null;
            return user;
        }

        public bool IsExist(string username)
        {
            if (_context.Users.Any(x => x.Email == username)) return true;
            return false;

        }
    }
}
