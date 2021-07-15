import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todoTitle: string = 'Default todo title';
  @Input() todoText: string = 'Default todo text';
  @Input() todoTags: string[] = ['default', 'tag', 'item', 'list'];

  constructor() {}

  ngOnInit(): void {}
}
