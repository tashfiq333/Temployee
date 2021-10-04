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
using System.Net;


namespace Temployee.Controllers
{
   [ApiController]
   [Route("[controller]")]
    public class EmptyController: ControllerBase
    {

         private readonly IMongoCollection<Freelancers> FreelancersCollection;
         private readonly IMongoCollection<Company> CompanyCollection;

        private readonly UserService us;
    
        private readonly string uid;

        public EmptyController(IMongoClient client,UserService service){
          var db = client.GetDatabase("Temployee");
         
          FreelancersCollection= db.GetCollection <Freelancers>("Freelancer");
          CompanyCollection= db.GetCollection <Company>("Company");
          us = service;
          IHttpContextAccessor http = new HttpContextAccessor();
          uid =(string) http.HttpContext.Items["UserId"];
        
          Console.WriteLine("Empty controller"+ uid);


        }
        

        [Authorize]
        [HttpGet]
        [Route("auth")]
         public string CheckUser()
         {

        //    if(FreelancersCollection.Find(s => (string)s.Uid == uid).FirstOrDefault()==null)
        //     Console.WriteLine("null");  

        //     else{
        //         Console.WriteLine("not null");  
        //     }


             
        //    return "nothing";
               
            
            

           

            if(FreelancersCollection.Find(s => s.Uid == uid).FirstOrDefault()==null && CompanyCollection.Find(s => s.Uid == uid).FirstOrDefault()==null )
            {
                return "nothing";

            }

            else if(FreelancersCollection.Find(s => s.Uid == uid).FirstOrDefault()!=null  )
            {
                return "freelancer";

            }
            else if(CompanyCollection.Find(s => s.Uid == uid).FirstOrDefault()!=null   )
            {
                return "company";

            }



            return "Something";
                        

            

         }
        [Authorize]
        [HttpGet]
        [Route("auth/Uid")]
         public ActionResult FreelancerID()
         {
             return Ok(uid);

         }

       
         
    }
}