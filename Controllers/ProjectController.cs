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
        private readonly IMongoCollection<AppliedJob> AppliedJobCollection;

        private readonly UserService us;
    
        private readonly string uid;

        public ProjectController(IMongoClient client,UserService service){
          var db = client.GetDatabase("Temployee");
          ProjectCollection= db.GetCollection <Project>("Project");
          FreelancersCollection= db.GetCollection <Freelancers>("Freelancer");
          AppliedJobCollection= db.GetCollection<AppliedJob>("AppliedJob");
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

        [Authorize]
        [HttpPost]
        [Route("applied")]
        public String Applied(AppliedJob appliedJob)
        {
            appliedJob.FreelancerId = uid;
            AppliedJobCollection.InsertOne(appliedJob);
            return "applied";
            

        }

        [Authorize]
        [HttpGet]
        [Route("job/{id}")]
        public ActionResult IsApplied(string id)
        {
            var job = AppliedJobCollection.Find(s =>s.JobId==id).ToList();
            foreach (var item in job)
            {
                if( item.FreelancerId ==uid){
                Console.WriteLine("ISAPPLIED :true");
                return Ok("true");
                }
             
            }
               
           
            Console.WriteLine("ISAPPLIED : flase");
            return Ok("false");
            

        }


        [Authorize]
        [HttpGet]
        [Route("appliedjob")]
       async public Task<List<Project>> JobApplied(){
          var appliedJobList = await AppliedJobCollection.Find(s => s.FreelancerId==uid).ToListAsync();

            List<Project> jobInfos = new List<Project>();
          foreach (var item in appliedJobList)
          {
             jobInfos.Add(await getJobInfo(item));
          }
          
          Console.WriteLine(jobInfos.ToJson());
            return jobInfos;
        }

       async Task<Project> getJobInfo(AppliedJob job)
        {
           var project =  await ProjectCollection.Find(s => s.Id==job.JobId).FirstOrDefaultAsync();
           return  project;

        }


    }
}