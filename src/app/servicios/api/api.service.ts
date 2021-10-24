import { Injectable } from '@angular/core';
import { Todo } from '../../modelos/todo.interfase';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: HttpClient) { }

  dataTodo():Observable<any>{
    return this.http.get<Todo>(this.url);
  }
}
