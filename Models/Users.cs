using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;

namespace Temployee.Models
{
    public class Users
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
         public string UserId{get;set;}
         
        [BsonElement("username")]
         public string Username{get;set;}

        [BsonElement("email")]
         public string Email{get;set;}

        [BsonElement("password")]
         public string Password{get;set;}

        [BsonElement("confirmpass")]
         public string ConPass{get;set;}
    }
}