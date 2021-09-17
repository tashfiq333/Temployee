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
    public class ProjectController : ControllerBase
    {
        private readonly IMongoCollection<Project> ProjectCollection;

        public ProjectController(IMongoClient client){
          var db = client.GetDatabase("Temployee");
          ProjectCollection= db.GetCollection <Project>("Project");
          Console.WriteLine("Project");


        }

         [HttpGet]
        public IEnumerable<Project> Get()
        {

           
            Console.WriteLine("DONE");
           return ProjectCollection.Find(s =>true).ToList();



        }

        [HttpPost]
        [Route("add")]
        public String post(Project project)
        {
            ProjectCollection.InsertOne(project);
            return "VERRY GOOD JOB";
            

        }


    }
}