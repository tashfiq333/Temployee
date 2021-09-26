using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Temployee.Service;
using System;
using System.Linq;
using System.Threading.Tasks;


namespace Temployee.Helpers
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly string _secret;

        public JwtMiddleware(RequestDelegate next, IConfiguration config)
        {
            _next = next;
            _secret = config["JWT:Secret"];
        }

        public async Task Invoke (HttpContext context, UserService userService)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            var userId = Util.ValidateToken(token, _secret);
            //Console.WriteLine("In middlewar3e");
           //  Console.WriteLine("HI "+ userId);

            if(userId != null)
            {
                context.Items["UserId"] = userService.GetById(userId).UserId;
                 Console.WriteLine("HI "+ userId);
               

              

            }   

            await _next(context);     
        }
    }
}