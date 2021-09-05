using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
namespace Temployee.ClientApp.src.Models
{
    public class WorkingOn
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string FreelancerId{get; set;}

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ProjectId{get; set;}


    }
}