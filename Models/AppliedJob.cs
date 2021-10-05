using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
namespace Temployee.Models
{
    public class AppliedJob
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id{get; set;}

        public string JobId{get;set;}
        public string FreelancerId{get;set;}

       

        
    }
}