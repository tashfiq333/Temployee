using System.ComponentModel.DataAnnotations;
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

        [Required(ErrorMessage = "State is requrired")]
        public string State{get;set;}

        [Required(ErrorMessage = "Nameis requrired")]

        public string Name{get;set;}

        [Required(ErrorMessage = "Description is requrired")]
        public string Description{get;set;}

        // [BsonId]
        // [BsonRepresentation(BsonType.ObjectId)]
        // public string Owner_Id{get;set;}

        // [Required(ErrorMessage = "Deadline is requrired")]
        public DateTime DeadLine{get;set;}

    }
}