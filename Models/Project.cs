using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
namespace Temployee.Models
{
    public class Project
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id{get; set;}
        public string State{get;set;}

        public string Name{get;set;}
        public string Description{get;set;}

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Owner_Id{get;set;}
        public DateTime DeadLine{get;set;}

    }
}