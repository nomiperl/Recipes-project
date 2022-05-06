using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using RecipesProject.Models;

namespace RecipesProject.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IRecipesDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _users = database.GetCollection<User>(settings.RecipesCollectionName);
        }

        public List<User> Get() =>
            _users.Find(User => true).ToList();

        public User Get(string id) =>
            _users.Find<User>(User => User.UserName == id).FirstOrDefault();
        
        //public Recipe GetByCategory(string Category) =>
        //     _recipes.Find<Recipe>(recipe => recipe.Category == Category).FirstOrDefault();

        public User Create(User user)
        {
            _users.InsertOne(user);
            return user;
        }

        public void Update(string id, User userIn) =>
            _users.ReplaceOne(user => user.UserName == id, userIn);

        //public void Remove(User user) =>
        //    _users.DeleteOne(user => user == recipeIn.Id && recipe.Author == user.UserName);

        //public void Remove(string id) =>
        //    _recipes.DeleteOne(recipe => recipe.Id == id);
    }
}

