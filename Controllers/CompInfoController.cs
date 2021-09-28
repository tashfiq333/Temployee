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
    public class CompinfoController: Controller
    {
        private readonly IMongoCollection<Company> CompinfoCollection;
        private readonly UserService us;
        private readonly string uid;
        public CompinfoController (IMongoClient client ,UserService service){
          var db = client.GetDatabase("Temployee");
          CompinfoCollection= db.GetCollection <Company>("Company");
          us = service;
          IHttpContextAccessor http = new HttpContextAccessor();
          uid =(string) http.HttpContext.Items["UserId"];
          Console.WriteLine("Cons");
        }

        [HttpGet]
        public IEnumerable<Company> Get()
        {

           
            Console.WriteLine("DONE");
           return CompinfoCollection.Find(s =>true).ToList();



        }


        [Authorize]    
        [HttpPost]
        [Route("add_2")]
        public String postUser(Company compin)
        {

          compin.Uid = uid;

              
               
          CompinfoCollection.InsertOne(compin);
          
            return "good";
            

        }
        
    }
}