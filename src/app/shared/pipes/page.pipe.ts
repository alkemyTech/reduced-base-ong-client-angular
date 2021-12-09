import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {

  transform( array: any[], interval: number, page: number = 0, search: string = '' ) {
    
    if( typeof array === 'undefined' )
      return

    if( search.length === 0 )
      return array.slice(page, page + interval);

    const arraySearch = array.filter( res => res.name.includes( search ) );
    return arraySearch.slice(page, page + interval);
  }

}
