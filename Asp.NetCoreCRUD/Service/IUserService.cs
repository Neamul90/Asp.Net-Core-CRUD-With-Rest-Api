using Asp.NetCoreCRUD.Models;
using Asp.NetCoreCRUD.Models.UserRequest;

namespace Asp.NetCoreCRUD.Service
{
    public interface IUserService
    {
        IEnumerable<User> GetAll();
        User GetById(int id);
        User Login(string username,string password);
        bool IsExist(string username);
        void Create(CreateRequest model);
        void Update(int id, UpdateRequest model);
        void Delete(int id);
    }
}
