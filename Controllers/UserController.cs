using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Temployee.Models;
using Temployee.Service;
using Temployee.ViewModels;

namespace project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService userService;

        public UserController(UserService _userService)
        {
             Console.WriteLine("CCRegister");
            userService = _userService;
        }

        [HttpPost]
        [Route("login")]
        public ActionResult Login(UserViewModel user)
        {
            Payload res = userService.Login(user);
            if (res.StatusCode != 200)
            {
                return new BadRequestObjectResult(new ErrorResult{ Description="Something is wrong", StatusCode=400, Message=res.StatusDescription});

            }
            return Ok(res);
        }

        [HttpPost]
        [Route("register")]
        public ActionResult Register(Users user)
        {
            Console.WriteLine("Register");
            Payload res = userService.Create(user);
            if (res.StatusCode != 200)
            {
                return new BadRequestObjectResult(new ErrorResult{ Description="Something is wrong", StatusCode=400, Message=res.StatusDescription});
            }
            return Ok(res);
        }
    }
}
