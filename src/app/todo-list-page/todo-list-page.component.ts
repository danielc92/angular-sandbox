import { Component, OnInit } from '@angular/core';
import { TodosService, Todo } from './todos.service';
@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss'],
  providers: [TodosService],
})
export class TodoListPageComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todosService.getTodos().subscribe((todos) => (this.todos = todos));
  }
}
