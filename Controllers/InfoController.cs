using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Temployee.Models;
using System.Linq;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using MongoDB.Bson;

namespace Temployee.Controllers
{
    [ApiController]
    [Route("[controller]")]   
    public class InfoController: Controller
    {
        private readonly IMongoCollection<UserInfo> UserinfoCollection;
        public InfoController (IMongoClient client){
            var db = client.GetDatabase("Temployee");
          UserinfoCollection= db.GetCollection <UserInfo>("UserInfo");
          Console.WriteLine("Cons");
        }

        [HttpGet]
        public IEnumerable<UserInfo> Get()
        {

           
            Console.WriteLine("DONE");
           return UserinfoCollection.Find(s =>true).ToList();



        }


        [HttpPost]
        [Route("add")]
        public String post(UserInfo useri)
        {
           
           
           UserinfoCollection.InsertOne(useri);
           var x = useri.infoId;
           Console.WriteLine(x); 
            return "VERY GOOD JOB Company";
            

        }
        
    }
}