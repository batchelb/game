import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (!value) {
      return 'Not assigned';
    }
    return value.split(' ').map((word)=>{return word.charAt(0).toUpperCase() + word.slice(1)}).join(' ');
  }
}