import { AfterViewInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { Country } from './countires.model';
import { CountriesListComponent } from './countries-list/countries-list.component';
@Pipe({
  name: 'searchCountries'
})
export class SearchCountriesPipe implements PipeTransform {
  // @ViewChild('CountriesListComponent') CountriesList: CountriesListComponent;
  filterdvalue: Country[];
  // @ViewChild('noSearchresults', { read: CountriesListComponent, static: true })
  // private CountriesListComponent: CountriesListComponent;
  transform(value: Country[], args: string): any {

    if (!value) return null;
    if (!args) return value;
    args = args.toLowerCase();
    // this.filterdvalue =
     return value.filter((item: any) => {
        return (JSON.stringify(item.region).toLowerCase().includes(args) || JSON.stringify(item.name.official).toLowerCase().includes(args))
      });
      // this.filterdvalue.length === 0 ? this.CountriesList.noSearchresultss() : this.filterdvalue;
    // return this.filterdvalue;
    //  return  this.filterdvalue.length > 0 ?  this.filterdvalue : `<div> no results found </div>`
  }



}




