import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform',
})
export class TransformPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
