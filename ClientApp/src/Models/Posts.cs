using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
namespace Temployee.ClientApp.src.Models
{
    public class Posts
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string CompanyId{get; set;}

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ProjectId{get; set;}
        
    }
}