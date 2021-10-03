using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Temployee.Models
{
    public class Skill{

        public double Rating{get;set;}

        public string SkillName{get;set;}


    }
    public class Freelancers 
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id{get; set;}

        public string Uid{get;set;}
         
       
        public string Name{get;set;}
        
       
        public string Phone_No{get;set;}

         public string Bio{get;set;}

         public string Email{get;set;}

      
        public double Price{get;set;}
        public string Experience{get;set;}

        public string Qualification{get;set;}

        public string Achievement{get;set;}

        public string Linkin{get;set;}

        public Skill[] FreelancerSkill{get;set;}

        
    
        
    }
}