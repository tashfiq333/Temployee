using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

using MongoDB.Bson;
using System;

namespace Temployee.Models
{
    public class Users
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
         public string UserId{get;set;}
         
      
         public string Username{get;set;}

      
         public string Email{get;set;}

       
        [Required(ErrorMessage = "Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
         public string Password{get;set;}

        [Required(ErrorMessage = "Confirm Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        [Compare("Password")]
     

         public string ConPass{get;set;}
    }
}