using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Temployee.Models
{
    public class Freelancers 
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id{get; set;}
         
        [BsonElement("name")]
        public string Name{get;set;}
        
        [BsonElement("phone_no")]
        public string Phone_No{get;set;}

        [BsonElement("bio")]
        public string Bio{get;set;}

        [BsonElement("price")]
        public double Price{get;set;}

        [BsonElement("Rating")]

        public double Rating{get;set;}
    
        
    }
}