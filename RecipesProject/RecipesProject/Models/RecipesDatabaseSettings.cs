using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipesProject.Models
{
   
       
        public class RecipesDatabaseSettings : IRecipesDatabaseSettings
        {
            public string RecipesCollectionName { get; set; }
            public string ConnectionString { get; set; }
            public string DatabaseName { get; set; }
        }

        public interface IRecipesDatabaseSettings
        {
            string RecipesCollectionName { get; set; }
            string ConnectionString { get; set; }
            string DatabaseName { get; set; }
        }
    }


