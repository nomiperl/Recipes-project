using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using RecipesProject.Models;
using RecipesProject.Services;
using RouteAttribute = Microsoft.AspNetCore.Components.RouteAttribute;

namespace RecipesProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class UsersController:ControllerBase
    {
        
            private readonly UserService _userService;

            public UsersController(UserService userService)
            {
                _userService = userService;
            }

        [HttpGet]
        public ActionResult<List<User>> Get() =>
            _userService.Get();

        [HttpGet("{id:length(24)}", Name = "GetUser")]
            public ActionResult<User> Get(string id)
            {
                var user = _userService.Get(id);

                if (user == null)
                {
                    return NotFound();
                }

                return user;
            }

       

        [HttpPost]
            public ActionResult<User> Create(User user)
            {
                _userService.Create(user);

                return CreatedAtRoute("GetUser", new { id = user.UserName.ToString() }, user);
            }

        

        [HttpPut("{id:length(24)}")]
            public IActionResult Update(string id, User userIn)
            {
                var user = _userService.Get(id);

                if (user == null)
                {
                    return NotFound();
                }

                _userService.Update(id, userIn);

                return NoContent();
            }

            [HttpDelete("{id:length(24)}")]
            public IActionResult Delete(string id)
            {
                var user = _userService.Get(id);

                if (user == null)
                {
                    return NotFound();
                }

                //_userService.Remove(id);

                return NoContent();
            }
        }
}
