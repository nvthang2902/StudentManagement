import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  @Input() student?: Student;
  @Output() studentsUpdated = new EventEmitter<Student[]>();

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  updateStudent(student: Student) {
    this.studentService
      .updateStudent(student)
      .subscribe((students: Student[]) => this.studentsUpdated.emit(students));
  }

  deleteStudent(student: Student) {
    this.studentService
      .deleteStudent(student)
      .subscribe((students: Student[]) => this.studentsUpdated.emit(students));
  }

  createStudent(student: Student) {
    this.studentService
      .createStudent(student)
      .subscribe((students: Student[]) => this.studentsUpdated.emit(students));
  }

}
