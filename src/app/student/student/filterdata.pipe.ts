import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata',
  pure:false //impure
})
export class FilterdataPipe implements PipeTransform {

  transform(value: any,name:string) {
    if (name === '') {
      return value
    }
    return value.filter((x: any) => x.name.toLowerCase().startsWith(name.toLocaleLowerCase()));
  }

}
