using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Temployee.Models;
using System.Linq;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Temployee.Service;
using MongoDB.Bson;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using MongoDB.Bson.Serialization;
using System.Net;


namespace Temployee.Controllers
{
   [ApiController]
   [Route("[controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly IMongoCollection<Project> ProjectCollection;
        private readonly IMongoCollection<Freelancers> FreelancersCollection;
        private readonly IMongoCollection<Company> CompanyCollection;

        private readonly UserService us;
    
        private readonly string uid;

        public ProjectController(IMongoClient client,UserService service){
          var db = client.GetDatabase("Temployee");
          ProjectCollection= db.GetCollection <Project>("Project");
          FreelancersCollection= db.GetCollection <Freelancers>("Freelancer");
          CompanyCollection= db.GetCollection <Company>("Company");
          us = service;
          IHttpContextAccessor http = new HttpContextAccessor();
          uid =(string) http.HttpContext.Items["UserId"];
        
          Console.WriteLine("Project"+ uid);


        }

       

        [HttpGet]
        public IEnumerable<Project> Get()
        {

           Console.WriteLine("User Id "+ uid);



           
           Console.WriteLine("Not DONE");
           return ProjectCollection.Find(s =>true).ToList();



        }

        [HttpPost]
        [Route("add")]
        public String post(Project project)
        {
            ProjectCollection.InsertOne(project);
            return "Job Posted";
            

        }


        [Authorize]
        [HttpGet]
        [Route("auth/{id}")]
         public ActionResult GetPostDetails(string id)
         {
            
            try
            {
                var filter = Builders<Project>.Filter.Eq("Id", id);
                var projection = Builders<Project>.Projection.
                    Include("Name").
                    Include("Duration").
                    Include("Price").
                    Include("Level").
                    Include("Description").
                    Include("Tags");

                var result = ProjectCollection.Find(filter).Project(projection).FirstOrDefault();
                return Ok( BsonSerializer.Deserialize<Project>(result));

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
             

         }


    }
}