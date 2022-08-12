import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = "Student";
  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateStudent(student: Student): Observable<Student[]> {
    return this.http.put<Student[]>(
      `${environment.apiUrl}/${this.url}`,
      student
    );
  }

  public createStudent(student: Student): Observable<Student[]> {
    return this.http.post<Student[]>(
      `${environment.apiUrl}/${this.url}`,
      student
    );
  }

  public deleteStudent(student: Student): Observable<Student[]> {
    return this.http.delete<Student[]>(
      `${environment.apiUrl}/${this.url}/${student.id}`
    );
  }
}