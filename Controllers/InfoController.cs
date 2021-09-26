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
        private readonly string uid;
        public InfoController (IMongoClient client ,UserService service){
          var db = client.GetDatabase("Temployee");
          UserinfoCollection= db.GetCollection <Freelancers>("Freelancer");
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

          useri.Uid = uid;

              
               
          UserinfoCollection.InsertOne(useri);
          
            return "good";
            

        }
        
    }
}