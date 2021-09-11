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
    public class CompanyController:Controller
    {

       
        private readonly IMongoCollection<Company> CompanyCollection;
        public CompanyController(IMongoClient client){
          var db = client.GetDatabase("Temployee");
          CompanyCollection= db.GetCollection <Company>("Company");
          Console.WriteLine("Cons");

        }


         [HttpGet]
        public IEnumerable<Company> Get()
        {

           
            Console.WriteLine("DONE");
           return CompanyCollection.Find(s =>true).ToList();



        }


        [HttpPost]
        [Route("add")]
        public String post(Company company)
        {
           
           
           CompanyCollection.InsertOne(company);
           var x = company.CompantId;
           Console.WriteLine(x); 
            return "VERY GOOD JOB Company";
            

        }


    }
}