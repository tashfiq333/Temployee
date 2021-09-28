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

         public string Address{get;set;}

         public string Phone{get;set;}

         public string Link{get;set;}

         public string Bio{get;set;}

         public string Speciality{get;set;}

         public string Achievement{get;set;}
        
    }
}