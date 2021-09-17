// using Microsoft.AspNetCore.Http;
// using Microsoft.Extensions.Configuration;
// using Microsoft.Extensions.DependencyInjection;
// using Microsoft.Extensions.Options;
// using Temployee.Service;
// using System;
// using System.Linq;
// using System.Threading.Tasks;


// namespace Temployee.Helpers
// {
//     public class JwtMiddleware
//     {
//         private readonly RequestDelegate _next;
//         private readonly string _secret;

//         public JwtMiddleware(RequestDelegate next, IConfiguration config)
//         {
//             _next = next;
//             _secret = config["JWT:Secret"];
//         }

//         public async Task Invoke (HttpContext context, UserService userService)
//         {
//             var token = context.Request.Headers["Authorization"].FirstOrDefault();
//             var userId = Util.ValidateToken(token, _secret);
//             if(userId != null)
//             {
//                 context.Items["UserId"] = userService.GetById(userId).Id;

//             }   

//             await _next(context);     
//         }
//     }
// }