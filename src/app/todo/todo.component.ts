import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todoTitle = 'Default todo title';
  @Input() todoText = 'Default todo text';
  @Input() todoTags = ['default', 'tag', 'item', 'list'];

  constructor() {}

  ngOnInit(): void {}
}
