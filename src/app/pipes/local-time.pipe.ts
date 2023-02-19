import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localTime'
})
export class LocalTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const d = new Date(value * 1000);
    d.setTime( d.getTime() + d.getTimezoneOffset() * 60 * 1000);
    return d.getHours() === 0 ? '0' + d.getHours(): d.getHours().toString();
  }

}
