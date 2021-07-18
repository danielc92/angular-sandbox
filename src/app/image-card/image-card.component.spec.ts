import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardComponent } from './image-card.component';

describe('ImageCardComponent', () => {
  let component: ImageCardComponent;
  let fixture: ComponentFixture<ImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render with correct base class', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('.image-card')).toBeTruthy();
  });
  it('should render default title', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('.image-card__title')?.textContent).toContain(
      'some title'
    );
  });
  it('should render custom title', () => {
    component.title = 'a custom title';
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('.image-card__title')?.textContent).toContain(
      'a custom title'
    );
  });
  it('should render default text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.image-card__text').textContent).toContain(
      'some text'
    );
  });
  it('should render custom text', () => {
    component.text = 'custom text';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.image-card__text').textContent).toContain(
      'custom text'
    );
  });
  it('should have new alt description', () => {
    component.imgAlt = 'CUSTOM ALT DESC';
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('img')?.getAttribute('alt')).toEqual(
      'CUSTOM ALT DESC'
    );
  });
});
