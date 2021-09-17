// using System;
// using System.Collections.Generic;
// using System.IO;
// using System.Net.Http;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Http;
// using Microsoft.Extensions.Configuration;
// using MongoDB.Bson.Serialization;
// using MongoDB.Driver;
// using Temployee.Helpers;
// using Temployee.Models;
// using Temployee.ViewModels;

// namespace Temployee.Service
// {
//     public class UserService
//     {
//         Payload Login(UserViewModel userview);
//         Payload Create(Users user);
//         User GetById(string id);
//     }

//     public class Userservice : UserService
//     {
//         private readonly IMongoCollection<Users> _userCollection;
//         private readonly string _secretKey;
        

//     public UserService(IConfiguration config)
//     {
//         // running the database on the default local server port
//         var client = new MongoClient(config["MongoDbConnection:URL"]);
//         var db = client.GetDatabase(config["MongoDbConnection:DatabaseName"]);
//         _userCollection = db.GetCollection<User>("Users");
//         _secretKey = config["JWT:Secret"];
//         _tokenExpiryTime = Int32.Parse(config["JWT:ExpiresIn"]);
//     }
    

//         public Payload Login(UserViewModel userview)
//         {
//             var user = _userCollection.Find(x => x.Email == userview.Email).FirstOrDefault();
//             if(user == null)
//             {
//                 Console.WriteLine(userview.Email + "doesnt exist");
//                 return new Payload {StatusCode = 404, StatusDescription = "Account doesnt exist"};

//             }else
//             {
//                 bool isPasswordVerified = BCrypt.Net.BCrypt.Verify(userview.Password, user.Password);
//                 if(!isPasswordVerified)
//                 {
//                     Console.WriteLine("Incorrect Password");
//                     return new Payload {StatusCode = 400, StatusDescription = "Incorrect password"};

//                 }else
//                 {
//                     string token = Util.GenerateToken(user, _secretKey, "Users", _tokenExpiryTime);

//                     return new Payload
//                     {
//                         StatusCode = 200,
//                         StatusDescription = token,
//                     };
//                 }
//             }
//         }
//     }
// }



//     public Payload Create(Users user)
//     {

//         var exUser = _userCollection.Find(x => x.Email == user.Email).FirstOrDefault();
//         if(exUser != null)
//         {
//             Console.WriteLine("Email contains an existing account");
//             return new Payload{StatusCode = 404, StatusDescription = "Email contains an existing account"};

//         }else
//         {
//             user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password, BCrypt.Net.BCrypt.GenerateSalt(12));
//             _userCollection.InsertOne(user);
//             return new Payload {StatusCode = 200, StatusDescription = "Account created successfully" };

//         }

   
// }
    
//  public User GetById(string id)
//         {
//             return _userCollection.Find(x => x.Id == id).FirstOrDefault();
//         }
// }

