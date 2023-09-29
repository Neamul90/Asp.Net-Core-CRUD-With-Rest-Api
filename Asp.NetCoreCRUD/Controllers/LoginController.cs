using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Asp.NetCoreCRUD.Service;
using AutoMapper;
using Asp.NetCoreCRUD.Models.Auth;

namespace Asp.NetCoreCRUD.Controllers
{
    public class LoginController : Controller
    {
        private IUserService _userService;

        public LoginController(
            IUserService userService)
        {
            _userService = userService;
        }
        public IActionResult Index()
        {
            return View(new AuthenticationRequest());
        }
        [HttpPost]
        public async Task<IActionResult> Index(AuthenticationRequest authentication)
        {
            if (ModelState.IsValid)
            {
                if (_userService.IsExist(authentication.Email))
                {
                    var user = _userService.Login(authentication.Email, authentication.Password);
                    if (user != null)
                    {
                        var claims = new List<Claim>() {
                             new Claim(ClaimTypes.NameIdentifier, Convert.ToString(user.Id)),
                             new Claim(ClaimTypes.Email, user.Email),
                             new Claim(ClaimTypes.Name, user.FirstName+user.LastName),
                        };

                        var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                        var principal = new ClaimsPrincipal(identity);
                        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, new AuthenticationProperties()
                        {
                            IsPersistent = true
                        });
                        return RedirectToAction(nameof(Index), "Home");

                    }
                    ViewBag.Password = "Authentication failed";

                    return View(authentication);

                }
                ViewBag.Email = "Your email is not valid";
                return View(authentication);
            }
            return View(authentication);
        }
        public async Task<IActionResult> LogOut()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return LocalRedirect("/");
        }
    }
}
