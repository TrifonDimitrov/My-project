import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string, maxCount = 30): string {
    return value.substring(0, maxCount);
  }

}
