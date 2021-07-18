import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-page',
  templateUrl: './pipes-page.component.html',
  styleUrls: ['./pipes-page.component.scss'],
})
export class PipesPageComponent implements OnInit {
  jsonPipe: any = {
    name: 'daniel',
    lang: 'typescript',
    date: new Date().toDateString(),
  };
  someDecimal: number = 0.23;
  someString: string = 'sOMe sTring';
  someDate: Date = new Date();
  constructor() {}

  ngOnInit(): void {}
}
