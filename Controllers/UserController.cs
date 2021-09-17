// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.Extensions.Logging;
// using Temployee.Models;
// using Temployee.Service;
// using Temployee.ViewModels;

// namespace project.Controllers
// {
//     [ApiController]
//     [Route("[controller]")]
//     public class UserController : ControllerBase
//     {
//         private readonly Userservice _userService;

//         public UserController(Userservice _userService)
//         {
//             this._userService = _userService;
//         }

//         [HttpPost]
//         [Route("login")]
//         public ActionResult Login(UserViewModel user)
//         {
//             Payload res = _userService.Login(user);
//             if (res.StatusCode != 200)
//             {
//                 return new BadRequestObjectResult(new ErrorResult("Something is wrong", 400, res.StatusDescription));

//             }
//             return Ok(res);
//         }

//         [HttpPost]
//         [Route("register")]
//         public ActionResult Register(Users user)
//         {
//             Payload res = _userService.Create(user);
//             if (res.StatusCode != 200)
//             {
//                 return new BadRequestObjectResult(new ErrorResult("Someting is wrong", 400, res.StatusDescription));
//             }
//             return Ok(res);
//         }
//     }
// }
