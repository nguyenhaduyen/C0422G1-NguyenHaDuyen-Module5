import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todo: Todo [] = [];

  constructor(private todoService: TodoService) {
    this.todoService.getAll().subscribe(todo => {
      this.todo = todo;
    })
  }

  ngOnInit() {
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(next => {
      this.todoService.getAll().subscribe(todo => {
        this.todo = todo;
      })
    })
  }
}
