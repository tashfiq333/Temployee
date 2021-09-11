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
    public class FreelancerController : ControllerBase
    {
       private readonly IMongoCollection<Freelancers> FreelancerCollection;

      
        public FreelancerController(IMongoClient client){

          var db = client.GetDatabase("Temployee");
          FreelancerCollection= db.GetCollection <Freelancers>("Freelancer");
          Console.WriteLine("Cons");

        }


         [HttpGet]
        public IEnumerable<Freelancers> Get()
        {

           
            Console.WriteLine("DONE");
           return FreelancerCollection.Find(s =>true).ToList();



        }


        [HttpPost]
        [Route("add")]
        public String post(Freelancers freelancers)
        {
            FreelancerCollection.InsertOne(freelancers);
            return "VERRY GOOD JOB";
            

        }
        
    }
}