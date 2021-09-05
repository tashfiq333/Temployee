using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Temployee.ClientApp.src.Models
{
    public class Freelancers 
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id{get; set;}

        public string Name{get;set;}

        public string Phone_No{get;set;}
        public string Bio{get;set;}
        public double Price{get;set;}

        public double Rating{get;set;}
    
        
    }
}