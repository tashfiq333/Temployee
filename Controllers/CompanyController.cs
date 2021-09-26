using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Temployee.Models;
using System.Linq;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;


using MongoDB.Driver;
using MongoDB.Bson;
namespace Temployee.Controllers
{
    [ApiController]
    [Route("[controller]")]   
    public class CompanyController:Controller
    {

       
        private readonly IMongoCollection<Company> CompanyCollection;
       
        public CompanyController(IMongoClient client ){
          var db = client.GetDatabase("Temployee");
          CompanyCollection= db.GetCollection <Company>("Company");
          

        }


         [HttpGet]
        public IEnumerable<Company> Get()
        {

           
            Console.WriteLine("DONE");
           return CompanyCollection.Find(s =>true).ToList();



        }

        // [Authorize]
        // [HttpGet]
        // [Route("auth/{id}")]
        // public ActionResult GetUserPostById(string id)
        // {

        //     Console.WriteLine(id);
        //     Users user = _blogService.GetUserPostById(id);
        //     if (post == null)
        //     {
        //         return new BadRequestObjectResult(new ErrorResult("Internal Server Error", 400, "Something is wrong"));
        //     }
        //     return Ok(post);
        // }


        [HttpPost]
        [Route("add")]
        public String post(Company company)
        {
           
           
           CompanyCollection.InsertOne(company);
           
            return "VERY GOOD JOB Company";
            

        }


    }
}