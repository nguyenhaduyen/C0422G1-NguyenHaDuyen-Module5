import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  todoForm: FormGroup

  constructor(private todoService: TodoService, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.todoForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    })
  }

  create() {
    this.todoService.create(this.todoForm.value).subscribe(next => {
      this.router.navigateByUrl("")
    })
  }
}
