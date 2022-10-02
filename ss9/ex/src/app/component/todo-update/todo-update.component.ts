import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Todo} from "../../model/todo";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  id: number
  todo: Todo
  todoForm: FormGroup
  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id')
    })
  }

  ngOnInit() {
    this.todoService.findById(this.id).subscribe(data=>{
      this.todo = data
    }, error => {

    }, () => {
      this.todoForm = new FormGroup({
        id: new FormControl(this.todo.id),
        name: new FormControl(this.todo.name)
      })
    })
  }

  update() {
    this.todoService.update(this.id,this.todoForm.value).subscribe(next=> {
      this.router.navigateByUrl('')
    })
  }
}
