using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
namespace Temployee.Models
{
    public class Company
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
         public string CompantId{get;set;}

          public string Uid{get;set;}

         public string Type{get;set;}

         public string Name{get;set;}

         public string Location{get;set;}


        
    }
}