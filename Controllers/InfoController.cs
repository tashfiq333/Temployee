using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Temployee.Models;
using System.Linq;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Temployee.Service;
using Microsoft.AspNetCore.Http;
using MongoDB.Bson;
using Microsoft.AspNetCore.Authorization;

namespace Temployee.Controllers
{
    [ApiController]
    [Route("[controller]")]   
    public class InfoController: Controller
    {
        private readonly IMongoCollection<Freelancers> UserinfoCollection;
        private readonly UserService us;
        private readonly IMongoCollection<Users> UserInfo;
        private readonly string uid;
        public InfoController (IMongoClient client ,UserService service){
          var db = client.GetDatabase("Temployee");
          UserinfoCollection= db.GetCollection <Freelancers>("Freelancer");
          UserInfo =db.GetCollection<Users>("User");
          us = service;
          IHttpContextAccessor http = new HttpContextAccessor();
          uid =(string) http.HttpContext.Items["UserId"];
          Console.WriteLine("Cons");
        }

        [HttpGet]
        public IEnumerable<Freelancers> Get()
        {

           
            Console.WriteLine("DONE");
           return UserinfoCollection.Find(s =>true).ToList();



        }


        [Authorize]    
        [HttpPost]
        [Route("add_2")]
        public String postUser(Freelancers useri)
        { 

          var u = UserInfo.Find(s => s.UserId==uid).FirstOrDefault();


          useri.Uid = uid;

          useri.Email = u.Email;
              
          UserinfoCollection.InsertOne(useri);
          
            return "good";
            

        }
        
    }
}