
import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-to-do',
  template: '',
  styleUrls: []
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  message;

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  add(): void {
    let newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe( t => this.todos.push(t), err => this.message = err);
  }

  delete(id): void {
    if (confirm('Are you sure?')) { this.service.delete(id).subscribe(); }
  }
}
