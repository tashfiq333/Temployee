using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Temployee.Models
{
    public class UserInfo
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string infoId{get; set;}

        

        // [Required(ErrorMessage = "Name is requrired")]

        public string Name{get;set;}

        public string Phone{get;set;}

        public string Linkin{get;set;}



        // [Required(ErrorMessage = "Description is requrired")]
        public string Bio{get;set;}

       
        
    }
}