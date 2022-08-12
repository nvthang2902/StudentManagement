import { Component } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student.UI';
  students: Student[] = [];
  studentToEdit?: Student;

  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
    this.studentService
      .getStudents()
      .subscribe((result: Student[]) => (this.students = result));
  }

  updateStudentList(students: Student[]) {
    this.students = students;
  }

  initNewStudent() {
    this.studentToEdit = new Student();
  }
  editStudent(student: Student) {
    this.studentToEdit = student;
  }
}
