using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Temployee.Models;
using Temployee.Service;
using System.Linq;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using MongoDB.Bson;
using Microsoft.AspNetCore.Http;
using MongoDB.Bson.Serialization;
using Microsoft.AspNetCore.Authorization;
namespace Temployee.Controllers
{
    [ApiController]
    [Route("[controller]")]   
    public class CompanyController:Controller
    {

       
        private readonly IMongoCollection<Company> CompanyCollection;
        private readonly UserService us;
        private readonly string uid;
        public CompanyController(IMongoClient client, UserService service ){
          var db = client.GetDatabase("Temployee");
          CompanyCollection= db.GetCollection <Company>("Company");
          us = service;
          IHttpContextAccessor http = new HttpContextAccessor();
          uid =(string) http.HttpContext.Items["CompantId"];

        }


         [HttpGet]
        public IEnumerable<Company> Get()
        {

           
            Console.WriteLine("DONE");
           return CompanyCollection.Find(s =>true).ToList();



        }

        [Authorize]   
        [HttpGet]
        [Route("user/{id}")]
        public ActionResult CompanyDetails(string id)
        {

            
            try
            {
                var filter = Builders<Company>.Filter.Eq("Uid", id);
                var projection = Builders<Company>.Projection.
                    Include("Name").
                    Include("Bio").
                    Include("Link").
                    Include("Address").
                    Include("Email").
                    Include("Achievement").
                    Include("Speciality").
                    Include("Phone");
                    
                var result = CompanyCollection.Find(filter).Project(projection).FirstOrDefault();
                return Ok( BsonSerializer.Deserialize<Company>(result));

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }



        }


        [HttpPost]
        [Route("add")]
        public String post(Company company)
        {
           
           
           CompanyCollection.InsertOne(company);
           
            return "VERY GOOD JOB Company";
            

        }


    }
}