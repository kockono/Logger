import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Empleados } from './empleados.model';
// import { Observable, Subject } from 'rxjs';
// import { map } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  selectEmpleado: Empleados;
  Empleados: Empleados[]; 
  
  readonly baseURL = 'http://localhost:3500/empleados'

  constructor(private http: HttpClient) { }

  postEmpleado(emp: Empleados){
    return this.http.post(this.baseURL, emp)
  }
  getEmpleadoList(){
    return this.http.get(this.baseURL);
  }

  putEmpleado(emp: Empleados) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }
  deleteEmpleado(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
