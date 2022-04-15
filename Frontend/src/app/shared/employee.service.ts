import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  public selectedEmployee: Employee;
  public employees: Employee[];

  readonly baseURL = 'http://localhost:3000/employees';

  constructor(public http: HttpClient) {}

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL + '/insert', emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL + '/list');
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + '/update' + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + '/delete' + `/${_id}`);
  }
}
