import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../model/todo";
import {reduce} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todo')
  }
  delete (id:number) {
    return this.http.delete('http://localhost:3000/todo/' + id)
  }
  create(todo:Todo) {
    return this.http.post('http://localhost:3000/todo',todo)
  }
  findById (id:number):Observable<Todo> {
    return this.http.get('http://localhost:3000/todo/' + id);
  }
  update (id:number,todo:Todo) : Observable<any> {
    return this.http.put('http://localhost:3000/todo/' + id, todo);
  }
}
