import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditionals',
  templateUrl: './conditionals.component.html',
  styleUrls: ['./conditionals.component.scss'],
})
export class ConditionalsComponent implements OnInit {
  showMessage: boolean = true;
  switchValue: 'red' | 'green' | 'orange' = 'green';
  constructor() {}

  ngOnInit(): void {}
}
