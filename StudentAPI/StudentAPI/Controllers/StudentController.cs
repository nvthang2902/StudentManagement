using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentAPI.Data;

namespace StudentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly DataContext _context;

        public StudentController(DataContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Student>>> GetStudents()
        {
            return Ok(await _context.Students.ToListAsync());
        }
        
        [HttpPost]
        public async Task<ActionResult<List<Student>>> CreateStudent(Student student){
            _context.Students.Add(student);
            await _context.SaveChangesAsync();

            return Ok(await _context.Students.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Student>>> UpdateStudent(Student student){
            var dbStudent=await _context.Students.FirstAsync();
            if(dbStudent == null)
                return BadRequest("Student not found.");
            
            dbStudent.FirstName=student.FirstName;
            dbStudent.LastName=student.LastName;
            dbStudent.ClassName=student.ClassName;
            dbStudent.Department=student.Department;

            await _context.SaveChangesAsync();

            return Ok(await _context.Students.ToListAsync());
        }
        
        [HttpDelete]
        public async Task<ActionResult<List<Student>>> DeleteStudent(int id){
            var dbStudent=await _context.Students.FindAsync(id);
            if(dbStudent==null)
                return BadRequest("Student not found.");
            
            _context.Students.Remove(dbStudent);
            await _context.SaveChangesAsync();

            return Ok(await _context.Students.ToListAsync());
        }
    }
}
