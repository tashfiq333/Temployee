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

        // [Required(ErrorMessage = "State is requrired")]
        public string State{get;set;}

        // [Required(ErrorMessage = "Nameis requrired")]

        public string Name{get;set;}

        public int Duration{get;set;}

        public int Price{get;set;}

        public string Level{get;set;}


        // [Required(ErrorMessage = "Description is requrired")]
        public string Description{get;set;}

       
         public string Ownerid{get;set;}

         public int number{get;set;}

      

        public string[] Tags{get;set;}

      


    }
}