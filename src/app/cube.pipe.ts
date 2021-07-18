import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cubed' })
export class CubePipe implements PipeTransform {
  transform(value: number): number {
    return Math.pow(value, 3);
  }
}
