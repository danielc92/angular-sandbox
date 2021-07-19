import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  value: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    alert('button clicked');
  }

  handleKeyUp(event: KeyboardEvent) {
    this.value = (event.target as HTMLInputElement).value;
  }
}
