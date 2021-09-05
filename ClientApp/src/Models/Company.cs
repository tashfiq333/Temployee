using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
namespace Temployee.ClientApp.src.Models
{
    public class Company
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
         public string CompantId{get;set;}

         public string Type{get;set;}

         public string Name{get;set;}

         public string Location{get;set;}


        
    }
}