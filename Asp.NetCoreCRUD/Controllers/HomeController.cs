using Asp.NetCoreCRUD.Models;
using Microsoft.AspNetCore.Mvc;

namespace Asp.NetCoreCRUD.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
