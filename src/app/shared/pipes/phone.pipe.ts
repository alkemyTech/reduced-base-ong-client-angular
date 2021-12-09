import { Pipe, PipeTransform } from '@angular/core';

/**
 * Formats a phone number
 * Takes a phone number
 * Usage:
 *  value | phone
 * Example:
 *  {{15468823 | phone}}
 *  formats to: 1546-8823
 */

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string | number): string {
    let reg = /(?=(?:\d{4})+(?:\.|$))/g
    if (typeof (value) === 'number') {
      return value.toString().split(reg).join('-')
    }
    else {
      return value.split(reg).join('-')
    }
  }

}
