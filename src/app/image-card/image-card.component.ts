import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input() title: string = 'some title';
  @Input() text: string = 'some text';
  @Input() imgSrc: string = '';
  @Input() imgAlt: string = 'placeholder alt';
  constructor() {}

  ngOnInit(): void {}
}
